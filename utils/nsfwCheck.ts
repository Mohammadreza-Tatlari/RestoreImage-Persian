//this peice of code is here in order to check whether the file contains inappropriate contents or not 
//for training and deploying machine learning models in the web browser and in Node. js. it uses graph in order to track the moves on charts and graphs to boot.

//this section may not be used in project


import * as tf from "@tensorflow/tfjs";
import * as nsfwjs from "nsfwjs";

tf.enableProdMode();

class NSFWPredictor {
  model: nsfwjs.NSFWJS | null = null;
  constructor() {
    this.model = null;
    this.getModel();
  }
  async getModel() {
    try {
      this.model = await nsfwjs.load(
        "https://nsfw-model-1.s3.us-west-2.amazonaws.com/nsfw-predict-model/",
        // @ts-ignore
        { type: "graph" }
      );
    } catch (error) {
      console.error(error);
    }
  }

  predict(element: HTMLImageElement, guesses: number) {
    if (!this.model) {
      throw new Error("Some error occured, please try again later!");
    }
    return this.model.classify(element, guesses);
  }

  async predictImg(file: File, guesses = 5) {
    const url = URL.createObjectURL(file);
    try {
      const img = document.createElement("img");
      img.width = 400;
      img.height = 400;

      img.src = url;
      return await new Promise<nsfwjs.predictionType[]>((res) => {
        img.onload = async () => {
          const results = await this.predict(img, guesses);
          URL.revokeObjectURL(url);
          res(results);
        };
      });
    } catch (error) {
      console.error(error);
      URL.revokeObjectURL(url);
      throw error;
    }
  }

  async isSafeImg(file: File) {
    try {
      const predictions = await this.predictImg(file, 3);
      const pornPrediction = predictions.find(
        ({ className }) => className === "Porn"
      );
      const hentaiPrediction = predictions.find(
        ({ className }) => className === "Hentai"
      );

      if (!pornPrediction || !hentaiPrediction) {
        return true;
      }
      return !(
        pornPrediction.probability > 0.25 || hentaiPrediction.probability > 0.25
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new NSFWPredictor();

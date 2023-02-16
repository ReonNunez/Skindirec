import requests
import time
import cv2
import pickle
import numpy as np
import tensorflow as tf
import tensorflow.keras as keras


#from tensorflow.keras.preprocessing import image
imgsz = 224; ## 224 resnet and vgg, 299 for inception
from tensorflow.keras.applications.vgg16 import preprocess_input
# sourceModel = tensorflow.keras.applications.ResNet50

SERVER_URL = "https://skindirec-dlsl.online/"
API_URL = SERVER_URL + "index.php/Apis/"
IMG_URL = SERVER_URL + "assets/images/"
LOOP_DELAY = 5
MODEL_TYPE = "vgg16"


modelName = "model_" + MODEL_TYPE;


testmodel = tf.keras.models.load_model("vgg16bestt.h5")

f = open("label_" + MODEL_TYPE + ".sav",'rb');labels = pickle.load(f);f.close();
labels = list(labels.values());



def main():
    
    # Infinite Loop Process
    while True:
        time.sleep(LOOP_DELAY)
        print("Checking...")
        rsp = requests.post(API_URL + 'checkNewImage')
        
        if not rsp.status_code == 200:
            print("There was a network error. Please check if you have internet connection.")
            continue

        if rsp.text.startswith("none"):
            continue
        
        rsp2 = requests.post(API_URL + 'checkuserid')

        imageid = rsp.text
        userid = rsp2.text
        user = 'USER_' + userid
        print("Received Request from ", user)
        print("Received request:", imageid)
        print("Downloading...")
        imageUrl = IMG_URL + imageid + '.jpg'


        # Download Image
        imgData = requests.get(imageUrl).content
        with open('tmp.jpg', 'wb') as fidImg:
            fidImg.write(imgData)
        
        print("Processing...")
        img = cv2.imread("tmp.jpg")
        
        # Classify Image
        img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
        img = cv2.resize(img,(imgsz,imgsz))
        img = preprocess_input(img)
        y_pred = testmodel.predict(np.array([img]))

        classification = labels[np.argmax(y_pred[0])]

        print("Classification:",classification)

        print("Uploading...")
        payload = {'imageid': imageid, 'result': classification}
        rsp = requests.post(API_URL + 'uploadResult', data=payload)

        print("Success")


if __name__=="__main__":
    main()
# Skindirec
Skin Disease Recognition (SkinDiRec) using deep learning image classification with the use of android web app

<h2>About</h2>
<p>This is a thesis project made by me and my fellow graduating group members back in college which focuses on detecting skin diseases such as:</p>
<ul>
  <li>Atopic Dermatits</li>
  <li>Nummular Dermatitis</li>
  <li>Contact Dermatitis</li>
  <li>Psoriasis</li>
  <li>Ringworm</li>
  <li>Negatives(Either none or none of the above)</li>
 </ul>
 <p>Using a smartphone device, specifically android device, an image is captured and then transferred to a local machine through a web host to classify the said image. The result from the local machine is sent back to the android web app again through the web host. Basically it consists of a web app, web host, and a local machine. I have only uploaded here the essentials to serve as a reference if you want to improve our project.</p>
 <h2>Trained Model</h2>
 The trained model is too large to upload in github. You can send me an email for a request for the trained model so that to encourage others to find their own dataset and train their own model. <br><br>
 Our model have only reached an actual testing accuracy of 84% due to many factors, but mainly due to the datasets we used to train the model, which mostly come from online medical repositories, which affected the perfomance of the model. Also, the accuracy of the model was affected due to the fine grain classification of some of the classes, specifically the three dermatitis types which are very hard to distinguish from each other by our naked eyes. <br><br>
 We strongly suggest to use vast amounts of unique images captured using an android phone for training so that to improve the performance of the model when used for actual testing and to try making your own model instead of using pre-trained models so that to overcome the challenges we've faced.
<h2>Android Web App</h2>
Our android web app makes use of the Apache Cordova mobile development framework, which makes making a web app much easier. There is nothing special to be mentioned except for the plugin used which is the camera in order to communicate the web app to the camera of the device. Refer to the documentation for tutorials and more information about the framework.
<br><br>
<h2>Project Members</h2>
Just including here the people who spent their time on this project:
<ul>
<li>KHENT CLIFFORD C. DE CHAVEZ</li>
<li>MA. DENIZE A. ESTRERA</li>
<li>FREZNEAL C. FALLARIA</li>
<li>JOSETTE FE B. KISON</li>
<li>JOSE FERNANDO C. NARVACAN</li>
<li>REIGHMONDE EUELLE O. NUÑEZ</li>

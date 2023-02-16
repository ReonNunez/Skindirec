/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    console.log("SKIN DIREC APP RUNNING...")

    $( document ).ready(function() {

        var appState = "ready"
        var imageId = ""
        var serverUrl = "https://skindirec-dlsl.online/"
        var apiUrl = serverUrl + "index.php/Apis/"


        var firstAidAdvice = {
            "Atopic Dermatitis" : "<ul>" +
                "<li>" + 
                    "Bathe in warm oatmeal water. Ground oatmeal contains antioxidants that may aid to reduce inflammation and irritation. After a 10-minute bath, hydrate your skin as soon as possible." +
                "</li>" +  
                "<li>" + 
                    "Make use of a humidifier. It is possible to keep your skin from drying out and becoming itchy by adding moisture to the air." +
                "</li>" +  
                "<li>" + 
                    "Scratching your skin is not a good idea. Instead of scratching itchy regions, apply pressure to them and keep your nails clipped. You might wish to have your children wear gloves at night to keep them from scratching themselves." +
                "</li>" +  
                "<li>" + 
                    "Wear comfortable, loose clothing that won't irritate your skin. Loose-fitting clothing will not irritate your skin and will help you avoid sweating." +
                "</li>" +  
            "</ul>" +
            "<br />" +
            "<p>Treatment for babies</p>" +
            "<ul>" +
                "<li>" + 
                    "Use bath oils and lotions after a bath to keep their skin moist and relieve irritation in newborns with eczema (infantile eczema). It's also a good idea to keep them out of severe heat or cold. If the rash doesn't go away, your child's pediatrician may prescribe an antihistamine to relieve the itching." +
                "</li>" +
            "</ul>",
            "Contact Dermatitis" : "<p class=content-text>You may be able to treat your contact dermatitis at home, or you may need to see a doctor, depending on the severity of your symptoms. You can use these home treatments to help calm your skin:</p>" +
            
            "<ul>" +
                "<li>" + 
                    "Immediately wash your skin with a gentle soap and lukewarm water." +
                "</li>" +  
                "<li>" + 
                    "The allergen or irritant that caused the rash should be removed or avoided." +
                "</li>" +  
                "<li>" + 
                    "Apply a cold damp compress on blisters three times a day for 30 minutes each time." +
                "</li>" +  
                "<li>" + 
                    "To help repair the protective layer, apply moisturizers to injured skin several times a day." +
                "</li>" +  
                "<li>" + 
                    "If you're itching, take an oral histamine." +
                "</li>" +  
            "</ul>" +
            "<p>Note: Antihistamine lotion should only be used if your doctor recommends it, as it can cause skin irritation or an allergic reaction.</p>",

            "Negatives" : "<p>Unidentified or Unknown disease.</p>",

            "Nummular Dermatitis" : "<p class=content-text>Nummular eczema does not have a known cure. However, by adopting specific lifestyle modifications and avoiding triggers, you may be able to control your illness. You should avoid the following things to help regulate your nummular eczema:</p>" +
            
            "<ul>" +
                "<li>" + 
                    "wool, as well as other irritants, could make your symptoms worse." +
                "</li>" +  
                "<li>" + 
                    "Bathing in excess and using harsh soaps in hot water" +
                "</li>" +  
                "<li>" + 
                    "usage of fabric softener and dryer sheets" +
                "</li>" +  
                "<li>" + 
                    "stressful situations" +
                "</li>" +  
                "<li>" + 
                    "exposure to environmental irritants such as home cleansers and chemicals" +
                "</li>" +  
                "<li>" + 
                    "abrasions, scratches, and cuts on the skin" +
                "</li>" +  
            "</ul>" +
            "<p class=content-text>However, eczema can be relieved by the following methods:</p>" +
            "<ul>" +
                "<li>" + 
                    "Covering and protecting the afflicted regions with wet bandages" +
                "</li>" +  
                "<li>" + 
                    "Medicated lotions or skin ointments, such as corticosteroids, are used to reduce itching and discomfort." +
                "</li>" +  
                "<li>" + 
                    "treating severe itching using UV light" +
                "</li>" +  
                "<li>" + 
                    "After showering, hydrate your skin with a non-scented moisturizer." +
                "</li>" +  
            "</ul>",

            "Psoriasis" : "<p class=content-text>To better manage your psoriasis and feel your best, try these self-care strategies:</p>" +
            "<ul>" +
                "<li>" + 
                    "<strong>Bathe on a regular basis.</strong> Bathing on a daily basis can help eliminate scales and soothe irritated skin. Soak for at least 15 minutes in water with bath oil, colloidal oatmeal, and Epsom salts. Use lukewarm water and gentle soaps with oils and fats added." +
                "</li>" +  
                "<li>" + 
                    "<strong>Make use of a moisturizer.</strong> After washing, pat your skin dry carefully and apply a strong, ointment-based moisturizer while it's still damp. Oils may be preferred to creams or lotions for extremely dry skin since they last longer. If moisturizing appears to help your skin, do so one to three times each day." +
                "</li>" +  
                "<li>" + 
                    "<strong>Overnight, cover the affected areas.</strong> Apply an ointment-based moisturizer to the afflicted skin and wrap it in plastic wrap before retiring to bed. Remove the plastic and wash away the scales as you wake up." +
                "</li>" +  
                "<li>" + 
                    "<strong>Apply a medicinal cream or ointment to the affected area.</strong> Reduce itching and scaling with an over-the-counter lotion or ointment containing hydrocortisone or salicylic acid. If you have psoriasis on your scalp, use a medicated shampoo with coal tar." +
                "</li>" +  
                "<li>" + 
                    "<strong>Psoriasis triggers should be avoided.</strong> Take note of the things that cause your psoriasis flare-ups and take actions to prevent or avoid them. Infections, skin traumas, stress, smoking, and excessive sun exposure can all aggravate psoriasis." +
                "</li>" +
                "<li>" + 
                    "<strong>Avoid consuming alcoholic beverages.</strong> Some psoriasis treatments may be less effective if you drink alcohol. Avoid drinking if you have psoriasis. If you do decide to drink, do so in moderation." +
                "</li>" + 
                "<li>" + 
                    "<strong>Make an effort to live a healthy lifestyle.</strong> You can manage your psoriasis by being active, eating healthily, and maintaining a healthy weight, in addition to stopping smoking and drinking minimally, if at all." +
                "</li>" +  
            "</ul>",

            "Ringworm" : "<ul>" +
                "<li>" + 
                    "<strong>Garlic.</strong> Infections are frequently treated with garlic. Although there have been no research on the effects of garlic on ringworm, it has been shown to be effective against other fungus such as Candida, Torulopsis, Trichophyton, and Cryptococcus. To use garlic as a treatment, mix crushed garlic cloves with some olive or coconut oil to produce a paste. Cover the afflicted skin with a thin layer of paste and gauze. Before rinsing, leave in place for up to 2 hours. Repeat twice a day till the symptoms go away. Rinse off the garlic paste immediately if it produces stinging, swelling, or redness, and do not reapply." +
                "</li>" +  
                "<li>" + 
                    "<strong>Soapy Water.</strong> Keep your skin as clean as possible to avoid ringworm from spreading or infecting other parts of your body. Rinse the infection with soap and warm water once or twice a day to achieve this. Fungus grows in damp regions, so make sure the skin is completely dry. Before applying any of the other home cures indicated below, always clean the skin in this manner. Before applying any of the following substances to the ringworm patches, a person should test a little amount on a healthy region of skin to check that they are not allergic or sensitive to the treatment." +
                "</li>" +
                "<li>" + 
                    "<strong>Apple Cider Vinegar.</strong> Antifungal effects of apple cider vinegar have been established against Candida, another fungal illness.To use apple cider vinegar to treat ringworm, soak a cotton wool pad in the vinegar and wipe it over the affected region. Repeat up to three times per day." +
                "</li>" +
                "<li>" + 
                    "<strong>Aloe Vera.</strong> According to researchTrusted Source, aloe vera includes six antiseptic ompounds that have antifungal, antibacterial, and antiviral properties. Three or four times a day, apply the gel from an aloe vera plant to the ringworm patch. The cooling effects of the gel may help to relieve itchy and inflamed skin." +
                "</li>" +
                "<li>" + 
                    "<strong>Coconut Oil.</strong> Coconut oil contains fatty acids that may kill fungal cells by disrupting their cell membranes. According to several studies, coconut oil may be an effective treatment for mild to moderate skin infections. Apply liquid coconut oil to the skin three times each day to treat ringworm. Coconut oil can also be used as a moisturizing lotion, which may help to prevent recurring ringworm infections. " +
                "</li>" +  
                "<li>" + 
                    "<strong>Grapefruit seed extract.</strong> Grapefruit seed extract may be used to treat fungal infections, according to anecdotal evidence. Proponents suggest combining 1 drop of grapefruit seed extract with a tablespoon of water and applying it to the skin twice daily to treat ringworm. " +
                "</li>" + 
                "<li>" + 
                    "<strong>Turmeric.</strong> Turmeric is an anti-inflammatory spice that is widely used. Curcumin, a component of turmeric, is thought to be responsible for the spice's health benefits. Its considerable antibacterial abilities have been documented in numerous studiesTrusted Source. To gain the benefits of turmeric, drink it as a tea or add it to your meals. To use as a topical treatment, combine it with a tiny amount of water or coconut oil until a paste forms, then apply to the skin. Allow it to dry before wiping it away. Turmeric may leave a yellow tint on lighter skin, although this will vanish after a few days." +
                "</li>" + 
                "<li>" + 
                    "<strong>Powdered licorice.</strong> Licorice is an antiviral, antibacterial, and anti-inflammatory plant that is commonly used in traditional Chinese medicine. It's also used to treat ringworm and other fungal infections at home. Mix 3 teaspoons of powdered licorice root into a cup of water for optimal results. Bring to a boil, then reduce to a low heat and cook for 10 minutes. When the liquid has cooled, it should have thickened into a paste. Apply this to the ringworm patch twice a day, leaving at least 10 minutes for each application before wiping or washing it of" +
                "</li>" + 
                "<li>" + 
                    "<strong>Tea tree oil.</strong> Tea tree oil has been used as a cure for numerous bacterial and fungal skin diseases by native Australians for more than a century. Tea tree oil is now widely used and beneficial in the treatment of ringworm. Mix 12 drops of tea tree essential oil with 1 ounce of a cold-pressed carrier oil, such as coconut oil, to get a 2% dilution. Apply three times a day on the skin. Those with less sensitive skin may be able to use tea tree oil directly to the affected area without diluting it first." +
                "</li>" + 
                "<li>" + 
                    "<strong>Oil of oregano.</strong> The antifungals thymol and carvacrol are found in oregano oil, which is derived from wild oregano (Origanum vulgare). According to certain studies, oregano oil can inhibit the growth of the Candida albicans fungus. Before used, dilute oregano oil with a carrier oil. Apply the oil three times a day to the afflicted region. It's worth noting that most oregano oils on the market are made from common oregano (Origanum marjoram) rather than wild oregano." +
                "</li>" + 
                "<li>" + 
                    "<strong>Lemon Grass.</strong> Several forms of fungus have been demonstrated to be inhibited by lemongrass essential oil. Mix lemongrass oil with a carrier oil and apply it to the skin twice daily with a cotton ball to treat ringworm." +
                "</li>" + 
            "</ul>"
        }


        var doctorAdvice = {
            "Atopic Dermatitis" : "<p class=content-text>Eczema can typically be managed at home using over-the-counter moisturizers and avoidance of irritants. If difficulties arise, a person may need to see a doctor. Eczema is known to cause bacterial, viral, and fungal skin infections. This is due to the fact that persons with eczema's skin lack the proteins that fight infections. Bacterial infections can aggravate eczema symptoms. Eczema patients may be more susceptible to fungal diseases such as yeast infections. They're also more susceptible to viral skin illnesses like eczema herpeticum, which can develop when they come into touch with the herpes simplex virus, which causes cold sores. Eczema sufferers should be aware of the following indicators of skin infection:</p>" +
            
            "<ul>" +
                "<li>" + 
                    "eczema abruptly worsening" +
                "</li>" +  
                "<li>" + 
                    "regions of the skin weeping" +
                "</li>" +  
                "<li>" + 
                    "a high temperature" +
                "</li>" +  
                "<li>" + 
                    "flu-like symptoms" +
                "</li>" +  
            "</ul>" +
            "<br />" +
            "<p>Doctors can treat all types of infections once they've found it. Antibacterial, antifungal, and antiviral medications may be prescribed. A person may need to go to the hospital in rare cases of viral infection.</p>",
            
            "Contact Dermatitis" : "<p class=content-text>If your rash is anything like this, call your doctor.</p>" +
            
            "<ul>" +
                "<li>" + 
                    "Painful" +
                "</li>" +  
                "<li>" + 
                    "Distracts you during the day or prevents you from sleeping." +
                "</li>" +  
                "<li>" + 
                    "Sudden" +
                "</li>" +  
                "<li>" + 
                    "It infects a wide area of your body." +
                "</li>" +  
                "<li>" + 
                    "After a few days, it hasn't improved." +
                "</li>" +
                "<li>" + 
                    "diseased or oozing" +
                "</li>" +  
                "<li>" + 
                    "Your eyes, nose, or lungs are affected." +
                "</li>" +  
            "</ul>",

            "Negatives" : "<p>Unidentified or Unknown disease. See your doctor or a dermatologist for diagnosis.</p>",

            "Nummular Dermatitis" : "<p class=content-text>See your doctor or a dermatologist if you see no improvement with self-care measures or if the condition gets worse.</p>",
            
            "Psoriasis" : "<p class=content-text>Your doctor may want to visit with you in person to inspect your skin, joints, and nails, or to perform tests that aren't possible to perform via video call. The following are indicators that you may require an in-person visit:" +
            "<ul>" +
                "<li>" + 
                    "Skin pain that is new or worsening" +
                "</li>" +  
                "<li>" + 
                    "Plaques on the skin that won't stop bleeding" +
                "</li>" +  
                "<li>" + 
                    "When stiff, achy joints get worse, it's time to see a doctor." +
                "</li>" +  
                "<li>" + 
                    "Pocking or deep ridges in your fingernails are signs of a problem." +
                "</li>" +  
                "<li>" + 
                    "Pain, redness, swelling, pus, hot skin to the touch, and a fever are all symptoms of a skin infection." +
                "</li>" +
                "<li>" + 
                    "Weight gain, dizziness, or a beating heart are all new health issues. These could be symptoms of psoriasis-related illnesses including diabetes or heart disease." +
                "</li>" +  
            "</ul>",

            "Ringworm" : "<p class=content-text>If your symptoms do not improve after two weeks of following home treatments, you may need to contact a doctor. An over-the-counter topical cream containing clotrimazole or terbinafine may be recommended by a doctor. These products should be used twice a day. The doctor may prescribe stronger antifungal drugs in specific circumstances. Teachers and athletes, for example, should contact their doctor as soon as possible if they are likely to spread ringworm to others as a result of their employment or lifestyle.</p>"
        }



        $('#uploadButton').on("click",function(){
            $("#uploadFile").trigger("click");
        })

        $('#camera').on("click", function(){
            navigator.camera.getPicture(cameraSuccessFct , cameraErrorFct, {
                destinationType: navigator.camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG,
                quality: 50,
                correctOrientation: true });
        })

        function cameraSuccessFct(imgData) {
            $.ajax({

                type: "POST",
                url: apiUrl + "uploadCapture",
                data: {fileupload:imgData},
                cache: false,
                contentType: "application/x-www-form-urlencoded",
                success: imageSuccess,
                error: imageError,
        
            });
        }

        function cameraErrorFct() {
            
        }

        

        function imageError(data){
            alert("There was an error sending your request. Contact the web administrator.")
        }
        function imageSuccess(data) {
            
            if (data.startsWith("error")) {
                alert("There was an error sending your request. Contact the web administrator.")
            }
            else {
                imageId = data
                appState="waiting"
                $('#resultImg').attr("src", serverUrl + 'assets/images/' + imageId + ".jpg")
                $.mobile.navigate("#waitingResults")
            }
            
        }


        setInterval(function(){
            var uploadImg = $("#uploadFile").val();

            if ((appState=="ready") & (uploadImg!="")) {

                var formData = new FormData(document.getElementById("imageSubmitForm"))

                $.ajax({
                    url: apiUrl + "uploadImage",
                    type: "POST",
                    data: formData,
                    cache:false,
                    contentType: false,
                    processData: false,
                    success: imageSuccess,
                    error: imageError,
                })

                $("#uploadFile").val("");
                
            }
            
        },1000)


        setInterval(function(){
            if (appState=="waiting") {
                $.ajax({
                    url: apiUrl+"checkResults",
                    type: "POST",
                    data: {
                        imageId : imageId,
                    },
                    success: function(data){
                        if (data.startsWith("error")) {
                            alert("There was an error sending your request. Contact the web administrator.")
                        }
                        else {
                            if (data.startsWith("finished")) {

                                appState = "ready"
                                var dataSplit = data.split("|")

                                var outputClass = dataSplit[1]
                                $(".output").html(outputClass)

                                $(".firstAidAdvice").html(firstAidAdvice[outputClass])
                                $(".doctorAdvice").html(doctorAdvice[outputClass])


                                $.mobile.navigate("#results")

                                console.log("showResults")
                                console.log(dataSplit[1])
                            }
                        }
                    },
                    error: function(data){
                        alert("There was an error sending your request. Contact the web administrator.")
                    }
                })
            }

        }, 5000)

    })


}

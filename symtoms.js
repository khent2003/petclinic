function analyzeSymptoms() {
    let symptom = document.getElementById("symptomInput").value.trim().toLowerCase();
    let diagnosis = "";
    let petImage = "";

    let diagnosisData = {
        "coughing": {
            text: "Your pet may have a respiratory infection. 🏥 Please consult a vet.",
            image: "images/coughing_pet.jpg"
        },
        "vomiting": {
            text: "Possible food poisoning or stomach issue. 🍗 Keep your pet hydrated.",
            image: "images/vomiting_pet.jpg"
        },
        "fever": {
            text: "Your pet might have an infection. 💧 Monitor their temperature and hydration.",
            image: "images/fever_pet.jpg"
        },
        "diarrhea": {
            text: "Could be a digestive issue. 🏥 Ensure your pet gets enough fluids.",
            image: "images/diarrhea_pet.jpg"
        }
    };

    if (diagnosisData[symptom]) {
        diagnosis = diagnosisData[symptom].text;
        petImage = diagnosisData[symptom].image;
    } else {
        diagnosis = "Symptom not recognized. Please consult a vet.";
        petImage = "images/default_pet.jpg";
    }

    document.getElementById("diagnosis").innerHTML = diagnosis;
    document.getElementById("petImage").src = petImage;
    document.getElementById("petImage").classList.remove("d-none");
    document.getElementById("result").style.display = "block";

    // Speak the diagnosis
    let speech = new SpeechSynthesisUtterance(diagnosis);
    speech.lang = "en-US";
    speech.voice = window.speechSynthesis.getVoices().find(voice => voice.name.includes("Female"));
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}

function goBack() {
    window.location.href = "index.html"; // Redirect to the dashboard
}

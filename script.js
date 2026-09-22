// Dashboard navigation

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

    item.addEventListener("click", function () {

        navItems.forEach((nav) => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Refresh button

const refreshButton = document.querySelector(".refresh-btn");

if (refreshButton) {

    refreshButton.addEventListener("click", () => {

        refreshButton.style.transform = "rotate(360deg)";
        refreshButton.style.transition = "0.5s";

        setTimeout(() => {

            refreshButton.style.transform = "rotate(0deg)";

            loadDashboardData();

        }, 500);

    });

}


// LOAD DATA FROM RESUME ANALYZER

function loadDashboardData() {

    const latestScore =
        localStorage.getItem("latestScore");

    const latestCandidate =
        localStorage.getItem("latestCandidate");

    const totalResumes =
        Number(
            localStorage.getItem("totalResumes") || 0
        );


    // Total Resumes

    const totalResumesElement =
        document.getElementById("totalResumes");

    if (totalResumesElement) {

        totalResumesElement.innerText =
            totalResumes;

    }


    // Analyzed Candidates

    const analyzedCandidatesElement =
        document.getElementById("analyzedCandidates");

    if (analyzedCandidatesElement) {

        analyzedCandidatesElement.innerText =
            totalResumes;

    }


    // Average / Latest Score

    const averageScoreElement =
        document.getElementById("averageScore");

    if (averageScoreElement && latestScore) {

        averageScoreElement.innerText =
            latestScore + "%";

    }


    // Latest Candidate

    const candidateElement =
        document.getElementById("latestCandidate");

    if (candidateElement && latestCandidate) {

        candidateElement.innerText =
            latestCandidate;

    }


    // Latest Score in Recent Analysis

    const latestScoreElement =
        document.getElementById("latestScore");

    if (latestScoreElement && latestScore) {

        latestScoreElement.innerText =
            latestScore + "%";


        // Change score category

        latestScoreElement.classList.remove(
            "high",
            "medium"
        );


        if (Number(latestScore) >= 70) {

            latestScoreElement.classList.add("high");

        } else {

            latestScoreElement.classList.add("medium");

        }

    }


    // Candidate Initial

    const avatarElement =
        document.getElementById("candidateAvatar");

    if (avatarElement && latestCandidate) {

        avatarElement.innerText =
            latestCandidate.charAt(0).toUpperCase();

    }

}


// Load dashboard automatically

document.addEventListener(
    "DOMContentLoaded",
    loadDashboardData
);

// ================= SETTINGS =================

// Load saved profile

window.addEventListener("DOMContentLoaded", () => {

    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");

    const userNameInput = document.getElementById("userName");
    const userEmailInput = document.getElementById("userEmail");

    if (userNameInput && savedName) {
        userNameInput.value = savedName;
    }

    if (userEmailInput && savedEmail) {
        userEmailInput.value = savedEmail;
    }

});


// Save profile

function saveProfile() {

    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");

    if (!userName || !userEmail) return;

    localStorage.setItem(
        "userName",
        userName.value
    );

    localStorage.setItem(
        "userEmail",
        userEmail.value
    );

    alert("Profile saved successfully!");
}


// Save AI settings

function saveAISettings() {

    const detailed =
        document.getElementById("detailedAnalysis");

    const keywords =
        document.getElementById("keywordAnalysis");

    const score =
        document.getElementById("matchScore");

    localStorage.setItem(
        "detailedAnalysis",
        detailed.checked
    );

    localStorage.setItem(
        "keywordAnalysis",
        keywords.checked
    );

    localStorage.setItem(
        "matchScore",
        score.checked
    );

    alert("AI settings saved successfully!");

}


// Clear analysis data

function clearData() {

    const confirmClear = confirm(
        "Are you sure you want to clear all analysis data?"
    );

    if (confirmClear) {

        localStorage.removeItem("latestCandidate");
        localStorage.removeItem("latestScore");
        localStorage.removeItem("analysisResult");

        localStorage.removeItem("totalResumes");
        localStorage.removeItem("analyzedCandidates");

        alert("Analysis data cleared successfully!");

        window.location.href = "index.html";

    }

}
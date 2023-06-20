const Q4 = new Audio ("../music/Piano01.mp3");
const A4 = new Audio ("../music/Piano02.mp3");
const Z4 = new Audio ("../music/Piano03.mp3");
const W4 = new Audio ("../music/Piano04.mp3");
const S4 = new Audio ("../music/Piano05.mp3");
const X4 = new Audio ("../music/Piano06.mp3");
const E4 = new Audio ("../music/Piano07.mp3");
const D4 = new Audio ("../music/Piano08.mp3");
const C4 = new Audio ("../music/Piano09.mp3");
const R4 = new Audio ("../music/Piano10.mp3");
const F4 = new Audio ("../music/Piano11.mp3");
const V4 = new Audio ("../music/Piano12.mp3");
const T4 = new Audio ("../music/Piano13.mp3");
const G4 = new Audio ("../music/Piano14.mp3");
const B4 = new Audio ("../music/Piano15.mp3");
const Y4 = new Audio ("../music/Piano16.mp3");
const H4 = new Audio ("../music/Piano17.mp3");
const N4 = new Audio ("../music/Piano18.mp3");
const U4 = new Audio ("../music/Piano19.mp3");
const J4 = new Audio ("../music/Piano20.mp3");
const M4 = new Audio ("../music/Piano21.mp3");
const I4 = new Audio ("../music/Piano22.mp3");
const K4 = new Audio ("../music/Piano23.mp3");
const O4 = new Audio ("../music/Piano24.mp3");
const L4 = new Audio ("../music/Piano25.mp3");
const P4 = new Audio ("../music/Piano26.mp3");
const Q1 = new Audio ("../music/Piano27.mp3");
const Q2 = new Audio ("../music/Piano28.mp3");
const Q3 = new Audio ("../music/Piano29.mp3");
const Q44 = new Audio ("../music/Piano30.mp3");
const Q5 = new Audio ("../music/Piano31.mp3");
const Q6 = new Audio ("../music/Piano32.mp3");
const Q7 = new Audio ("../music/Piano33.mp3");
const Q8 = new Audio ("../music/Piano34.mp3");
const Q9 = new Audio ("../music/Piano35.mp3");
const Q10 = new Audio ("../music/Piano36.mp3");
const Q11 = new Audio ("../music/Piano37.mp3");
const Q12 = new Audio ("../music/Piano38.mp3");
const Q13 = new Audio ("../music/Piano39.mp3");
const Q14 = new Audio ("../music/Piano40.mp3");
const Q15 = new Audio ("../music/Piano41.mp3");
const Q16 = new Audio ("../music/Piano42.mp3");
const Q17 = new Audio ("../music/Piano43.mp3");
        const playSound = audio => {
            const clone = audio.cloneNode();
            clone.play();
            setTimeout(() => (clone.volume = 0.8),400);
            setTimeout(() => (clone.volume = 0.6),800);
            setTimeout(() => (clone.volume = 0.4),1200);
            setTimeout(() => (clone.volume = 0.2),1600);
            setTimeout(() => (clone.volume = 0),2000);
        };
        const Q4Key = document.querySelector(".Q4-key");
        const playQ4 = () => {
            playSound(Q4);
            Q4Key.classList.add("CSS");
            setTimeout(() => Q4Key.classList.remove("CSS"),200);
        };
        Q4Key.addEventListener("click", playQ4);
        
        const A4Key = document.querySelector(".A4-key");
        const playA4 = () => {
            playSound(A4);
            A4Key.classList.add("CSS");
            setTimeout(() => A4Key.classList.remove("CSS"),200);
        };
        A4Key.addEventListener("click", playA4);

        const Z4Key = document.querySelector(".Z4-key");
        const playZ4 = () => {
            playSound(Z4);
            Z4Key.classList.add("CSS");
            setTimeout(() => Z4Key.classList.remove("CSS"),200);
        };
        Z4Key.addEventListener("click", playZ4);

        const W4Key = document.querySelector(".W4-key");
        const playW4 = () => {
            playSound(W4);
            W4Key.classList.add("CSS");
            setTimeout(() => W4Key.classList.remove("CSS"),200);
        };
        W4Key.addEventListener("click", playW4);

        const S4Key = document.querySelector(".S4-key");
        const playS4 = () => {
            playSound(S4);
            S4Key.classList.add("CSS");
            setTimeout(() => S4Key.classList.remove("CSS"),200);
        };
        S4Key.addEventListener("click", playS4);

        const X4Key = document.querySelector(".X4-key");
        const playX4 = () => {
            playSound(X4);
            X4Key.classList.add("CSS");
            setTimeout(() => X4Key.classList.remove("CSS"),200);
        };
        X4Key.addEventListener("click", playX4);

        const E4Key = document.querySelector(".E4-key");
        const playE4 = () => {
            playSound(E4);
            E4Key.classList.add("CSS");
            setTimeout(() => E4Key.classList.remove("CSS"),200);
        };
        E4Key.addEventListener("click", playE4);

        const D4Key = document.querySelector(".D4-key");
        const playD4 = () => {
            playSound(D4);
            D4Key.classList.add("CSS");
            setTimeout(() => D4Key.classList.remove("CSS"),200);
        };
        D4Key.addEventListener("click", playD4);

        const C4Key = document.querySelector(".C4-key");
        const playC4 = () => {
            playSound(C4);
            C4Key.classList.add("CSS");
            setTimeout(() => C4Key.classList.remove("CSS"),200);
        };
        C4Key.addEventListener("click", playC4);

        const R4Key = document.querySelector(".R4-key");
        const playR4 = () => {
            playSound(R4);
            R4Key.classList.add("CSS");
            setTimeout(() => R4Key.classList.remove("CSS"),200);
        };
        R4Key.addEventListener("click", playR4);

        const F4Key = document.querySelector(".F4-key");
        const playF4 = () => {
            playSound(F4);
            F4Key.classList.add("CSS");
            setTimeout(() => F4Key.classList.remove("CSS"),200);
        };
        F4Key.addEventListener("click", playF4);

        const V4Key = document.querySelector(".V4-key");
        const playV4 = () => {
            playSound(V4);
            V4Key.classList.add("CSS");
            setTimeout(() => V4Key.classList.remove("CSS"),200);
        };
        V4Key.addEventListener("click", playV4);

        const T4Key = document.querySelector(".T4-key");
        const playT4 = () => {
            playSound(T4);
            T4Key.classList.add("CSS");
            setTimeout(() => T4Key.classList.remove("CSS"),200);
        };
        T4Key.addEventListener("click", playT4);

        const G4Key = document.querySelector(".G4-key");
        const playG4 = () => {
            playSound(G4);
            G4Key.classList.add("CSS");
            setTimeout(() => G4Key.classList.remove("CSS"),200);
        };
        G4Key.addEventListener("click", playG4);

        const B4Key = document.querySelector(".B4-key");
        const playB4 = () => {
            playSound(B4);
            B4Key.classList.add("CSS");
            setTimeout(() => B4Key.classList.remove("CSS"),200);
        };
        B4Key.addEventListener("click", playB4);

        const Y4Key = document.querySelector(".Y4-key");
        const playY4 = () => {
            playSound(Y4);
            Y4Key.classList.add("CSS");
            setTimeout(() => Y4Key.classList.remove("CSS"),200);
        };
        Y4Key.addEventListener("click", playY4);

        const H4Key = document.querySelector(".H4-key");
        const playH4 = () => {
            playSound(H4);
            H4Key.classList.add("CSS");
            setTimeout(() => H4Key.classList.remove("CSS"),200);
        };
        H4Key.addEventListener("click", playH4);

        const N4Key = document.querySelector(".N4-key");
        const playN4 = () => {
            playSound(N4);
            N4Key.classList.add("CSS");
            setTimeout(() => N4Key.classList.remove("CSS"),200);
        };
        N4Key.addEventListener("click", playN4);

        const U4Key = document.querySelector(".U4-key");
        const playU4 = () => {
            playSound(U4);
            U4Key.classList.add("CSS");
            setTimeout(() => U4Key.classList.remove("CSS"),200);
        };
        U4Key.addEventListener("click", playU4);

        const J4Key = document.querySelector(".J4-key");
        const playJ4 = () => {
            playSound(J4);
            J4Key.classList.add("CSS");
            setTimeout(() => J4Key.classList.remove("CSS"),200);
        };
        J4Key.addEventListener("click", playJ4);

        const M4Key = document.querySelector(".M4-key");
        const playM4 = () => {
            playSound(M4);
            M4Key.classList.add("CSS");
            setTimeout(() => M4Key.classList.remove("CSS"),200);
        };
        M4Key.addEventListener("click", playM4);

        const I4Key = document.querySelector(".I4-key");
        const playI4 = () => {
            playSound(I4);
            I4Key.classList.add("CSS");
            setTimeout(() => I4Key.classList.remove("CSS"),200);
        };
        I4Key.addEventListener("click", playI4);

        const K4Key = document.querySelector(".K4-key");
        const playK4 = () => {
            playSound(K4);
            K4Key.classList.add("CSS");
            setTimeout(() => K4Key.classList.remove("CSS"),200);
        };
        K4Key.addEventListener("click", playK4);

        const O4Key = document.querySelector(".O4-key");
        const playO4 = () => {
            playSound(O4);
            O4Key.classList.add("CSS");
            setTimeout(() => O4Key.classList.remove("CSS"),200);
        };
        O4Key.addEventListener("click", playO4);

        const L4Key = document.querySelector(".L4-key");
        const playL4 = () => {
            playSound(L4);
            L4Key.classList.add("CSS");
            setTimeout(() => L4Key.classList.remove("CSS"),200);
        };
        L4Key.addEventListener("click", playL4);

        const P4Key = document.querySelector(".P4-key");
        const playP4 = () => {
            playSound(P4);
            P4Key.classList.add("CSS");
            setTimeout(() => P4Key.classList.remove("CSS"),200);
        };
        P4Key.addEventListener("click", playP4);

        const Q1Key = document.querySelector(".Q1-key");
        const playQ1 = () => {
            playSound(Q1);
            Q1Key.classList.add("Active");
            setTimeout(() => Q1Key.classList.remove("Active"),200);
        };
        Q1Key.addEventListener("click", playQ1);

        const Q2Key = document.querySelector(".Q2-key");
        const playQ2 = () => {
            playSound(Q2);
            Q2Key.classList.add("Active");
            setTimeout(() => Q2Key.classList.remove("Active"),200);
        };
        Q2Key.addEventListener("click", playQ2);

        const Q3Key = document.querySelector(".Q3-key");
        const playQ3 = () => {
            playSound(Q3);
            Q3Key.classList.add("Active");
            setTimeout(() => Q3Key.classList.remove("Active"),200);
        };
        Q3Key.addEventListener("click", playQ3);

        const Q44Key = document.querySelector(".Q44-key");
        const playQ44 = () => {
            playSound(Q44);
            Q44Key.classList.add("Active");
            setTimeout(() => Q44Key.classList.remove("Active"),200);
        };
        Q44Key.addEventListener("click", playQ44);

        const Q5Key = document.querySelector(".Q5-key");
        const playQ5 = () => {
            playSound(Q5);
            Q5Key.classList.add("Active");
            setTimeout(() => Q5Key.classList.remove("Active"),200);
        };
        Q5Key.addEventListener("click", playQ5);

        const Q6Key = document.querySelector(".Q6-key");
        const playQ6 = () => {
            playSound(Q6);
            Q6Key.classList.add("Active");
            setTimeout(() => Q6Key.classList.remove("Active"),200);
        };
        Q6Key.addEventListener("click", playQ6);

        const Q7Key = document.querySelector(".Q7-key");
        const playQ7 = () => {
            playSound(Q7);
            Q7Key.classList.add("Active");
            setTimeout(() => Q7Key.classList.remove("Active"),200);
        };
        Q7Key.addEventListener("click", playQ7);

        const Q8Key = document.querySelector(".Q8-key");
        const playQ8 = () => {
            playSound(Q8);
            Q8Key.classList.add("Active");
            setTimeout(() => Q8Key.classList.remove("Active"),200);
        };
        Q8Key.addEventListener("click", playQ8);

        const Q9Key = document.querySelector(".Q9-key");
        const playQ9 = () => {
            playSound(Q9);
            Q9Key.classList.add("Active");
            setTimeout(() => Q9Key.classList.remove("Active"),200);
        };
        Q9Key.addEventListener("click", playQ9);

        const Q10Key = document.querySelector(".Q10-key");
        const playQ10 = () => {
            playSound(Q10);
            Q10Key.classList.add("Active");
            setTimeout(() => Q10Key.classList.remove("Active"),200);
        };
        Q10Key.addEventListener("click", playQ10);

        const Q11Key = document.querySelector(".Q11-key");
        const playQ11 = () => {
            playSound(Q11);
            Q11Key.classList.add("Active");
            setTimeout(() => Q11Key.classList.remove("Active"),200);
        };
        Q11Key.addEventListener("click", playQ11);

        const Q12Key = document.querySelector(".Q12-key");
        const playQ12 = () => {
            playSound(Q12);
            Q12Key.classList.add("Active");
            setTimeout(() => Q12Key.classList.remove("Active"),200);
        };
        Q12Key.addEventListener("click", playQ12);

        const Q13Key = document.querySelector(".Q13-key");
        const playQ13 = () => {
            playSound(Q13);
            Q13Key.classList.add("Active");
            setTimeout(() => Q13Key.classList.remove("Active"),200);
        };
        Q13Key.addEventListener("click", playQ13);

        const Q14Key = document.querySelector(".Q14-key");
        const playQ14 = () => {
            playSound(Q14);
            Q14Key.classList.add("Active");
            setTimeout(() => Q14Key.classList.remove("Active"),200);
        };
        Q14Key.addEventListener("click", playQ14);

        const Q15Key = document.querySelector(".Q15-key");
        const playQ15 = () => {
            playSound(Q15);
            Q15Key.classList.add("Active");
            setTimeout(() => Q15Key.classList.remove("Active"),200);
        };
        Q15Key.addEventListener("click", playQ15);

        const Q16Key = document.querySelector(".Q16-key");
        const playQ16 = () => {
            playSound(Q16);
            Q16Key.classList.add("Active");
            setTimeout(() => Q16Key.classList.remove("Active"),200);
        };
        Q16Key.addEventListener("click", playQ16);

        const Q17Key = document.querySelector(".Q17-key");
        const playQ17 = () => {
            playSound(Q17);
            Q17Key.classList.add("Active");
            setTimeout(() => Q17Key.classList.remove("Active"),200);
        };
        Q17Key.addEventListener("click", playQ17);


        window.addEventListener("keydown", ({keyCode})=> {
            if (keyCode === 81) return playQ4();
            if (keyCode === 87) return playA4();
            if (keyCode === 69) return playZ4();
            if (keyCode === 82) return playW4();
            if (keyCode === 84) return playS4();
            if (keyCode === 89) return playX4();
            if (keyCode === 85) return playE4();
            if (keyCode === 73) return playD4();
            if (keyCode === 79) return playC4();
            if (keyCode === 80) return playR4();
            if (keyCode === 65) return playF4();
            if (keyCode === 83) return playV4();
            if (keyCode === 68) return playT4();
            if (keyCode === 70) return playG4();
            if (keyCode === 71) return playB4();
            if (keyCode === 72) return playY4();
            if (keyCode === 74) return playH4();
            if (keyCode === 75) return playN4();
            if (keyCode === 76) return playU4();
            if (keyCode === 90) return playJ4();
            if (keyCode === 88) return playM4();
            if (keyCode === 67) return playI4();
            if (keyCode === 86) return playK4();
            if (keyCode === 66) return playO4();
            if (keyCode === 78) return playL4();
            if (keyCode === 77) return playP4();
            if (keyCode === 49) return playQ1();
            if (keyCode === 50) return playQ2();
            if (keyCode === 51) return playQ3();
            if (keyCode === 52) return playQ44();
            if (keyCode === 53) return playQ5();
            if (keyCode === 54) return playQ6();
            if (keyCode === 55) return playQ7();
            if (keyCode === 56) return playQ8();
            if (keyCode === 57) return playQ9();
            if (keyCode === 48) return playQ10();
            if (keyCode === 189) return playQ11();
            if (keyCode === 187) return playQ12();
            if (keyCode === 219) return playQ13();
            if (keyCode === 221) return playQ14();
            if (keyCode === 220) return playQ15();
            if (keyCode === 186) return playQ16();
            if (keyCode === 222) return playQ17();
        })

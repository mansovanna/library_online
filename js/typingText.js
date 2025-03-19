const fullText =
        "យើងបង្កើតឡើងក្នុងគោលបំណងជួយអ្នកសម្រាប់ស្វែងរកសៀវភៅ \nសិក្សាតាមបែប ឌីជីថល"; // Khmer text
      const textElement = document.getElementById("text");
      const counterElement = document.getElementById("counter");

      let currentCount = 0;
      let currentText = "";

      function animateTyping() {
        textElement.style.opacity = "1";

        function typeCharacter() {
          if (currentCount < fullText.length) {
            currentText += fullText[currentCount];
            textElement.innerText = currentText;
            animateCount(currentCount + 1);
            currentCount++;
            setTimeout(typeCharacter, 100); 
          } else {
            setTimeout(resetAnimation, 2000); 
          }
        }

        typeCharacter();
      }

      function animateCount(target) {
        let start = Number(counterElement.innerText);
        let step = (target - start) / 10; 

        function updateCounter() {
          if (start < target) {
            start += step;
            counterElement.innerText = Math.floor(start);
            requestAnimationFrame(updateCounter);
          } else {
            counterElement.innerText = target;
          }
        }

        updateCounter();
      }

      function resetAnimation() {
        currentText = "";
        textElement.innerText = "";
        counterElement.innerText = "0";
        currentCount = 0;
        textElement.style.opacity = "0"; 
        setTimeout(animateTyping, 500); 
      }

      animateTyping();
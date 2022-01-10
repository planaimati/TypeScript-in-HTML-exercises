class Typed {
  constructor(private textElement: HTMLElement, private speed: number) {}

  text = this.textElement.innerText;
  nexText = "";
  textArr = this.text.split("");
  counter = 0;

  clearText() {
    this.textElement.innerText = " ";
  }

  deleteText() {
    const deleteLetters = setInterval(() => {
      if (this.counter > -this.text.length - 1) {
        

        

        this.textElement.innerText.slice(0, this.counter);

        this.counter--;
      } else {
        clearInterval(deleteLetters);
        return;
      }
    }, 100);
  }

  writeText() {
    const addLetters = setInterval(() => {
      if (this.counter < this.textArr.length) {
        this.counter++;
        this.textElement.innerText = this.text.slice(0, this.counter);
        

        this.nexText = this.text.slice(0, this.counter);
        
      } else {
        
        clearInterval(addLetters);
        this.counter = 0;
        return;
      }
    }, 100);

    setTimeout(() => {
      this.deleteText();
    }, 3000);
  }
}

const typed = new Typed(document.querySelector(".heading") as HTMLElement, 5);

typed.clearText();
typed.writeText();

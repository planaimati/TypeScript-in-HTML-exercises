class Typed {
  constructor(private textElement: HTMLElement, private speed: number) {}

  text = this.textElement.innerText;
  textArr = this.text.split("");
  counter = 0;

  clearText() {
    this.textElement.innerText = " ";
  }

  writeText() {
    console.log(this.textArr);

    const addLetters = setInterval(() => {
      if (this.counter < this.textArr.length) {
        this.textElement.innerText =
          this.textElement.innerText + this.textArr[this.counter];
        this.counter++;
      } else {
        clearInterval(addLetters);
        return;
      }
    }, 100);
  }
}

const typed = new Typed(document.querySelector(".heading") as HTMLElement, 5);

typed.writeText();
typed.clearText();

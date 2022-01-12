interface arrObjectInterface {
  type: string;
  name?: string;
  placeholder?: string;
  label?: string;
}

interface settingInterface {
  action: string;
  method: string;
  inputs: arrObjectInterface[];
}

const generateFormPattern = (settings: settingInterface) => {
  const form = document.createElement("form");
  form.action = settings.action;
  form.method = settings.method;
  document.body.appendChild(form);

  settings.inputs.map((item) => {
    console.log(item.type);

    switch (item.type) {
      case "header":
        const h4 = document.createElement("h4");
        h4.setAttribute("type", item.type);
        h4.textContent = item.label || "Tytuł";
        form.appendChild(h4);
        break;

      case "email":
        const input: HTMLInputElement = document.createElement("input");
        input.setAttribute("type", item.type);
        input.setAttribute("name", item.name || "email");
        input.setAttribute("placeholder", item.placeholder || "Wpisz email");
        form.appendChild(input);
        break;

      case "textarea":
        const textarea = document.createElement("textarea");
        textarea.setAttribute("name", item.name || "content");
        textarea.setAttribute("type", item.name || "textarea");
        textarea.setAttribute(
          "placeholder",
          item.placeholder || "Wpisz treść wiadomości"
        );
        form.appendChild(textarea);
        break;

      case "submit":
        const button = document.createElement("button");
        button.setAttribute("type", item.type || "submit");
        button.textContent = item.label || "Wyślij wiadomość";
        form.appendChild(button);
        break;
    }
  });
};

const testSettings = {
  action: "/contact/by-mail",
  method: "POST",
  inputs: [
    { type: "header" },
    { type: "header", label: "Skontaktuj się z nami" },
    { name: "yourEmail", type: "email", placeholder: "Wpisz swój email" },
    { type: "email" },
    {
      name: "content",
      type: "textarea",
      placeholder: "Wpisz treść wiadomości",
    },
    { type: "submit", label: "Wyślij wiadomość" },
  ],
};

generateFormPattern(testSettings);

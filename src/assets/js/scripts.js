

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".swiper-button-prev",
  },
});

// welcome-slider
let innerLoader = document.getElementById("innerLoader");
let innerLoaderText = document.getElementById("innerLoaderText");

if (innerLoader) {
  window.addEventListener("load", () => {
    innerLoaderText.classList.remove("opacity-0", "scale-150");

    setTimeout(() => {
      innerLoaderText.classList.add("opacity-0", "scale-150");
      innerLoader.classList.add("opacity-0", "invisible")
    }, 2500)
  })
}
// welcome-slider

// register
var emailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+.[a-zA-Z0-9]+)+$"
);
let emailAddress = document.getElementById("emailAddress");
let emailErr = document.getElementById("emailErr");
if (emailAddress) {
  emailAddress.addEventListener("keyup", () => {
    if (emailAddress.value) {
      let status = emailRegex.test(emailAddress.value.toLowerCase());
      if (status) {
        emailAddress.classList.remove("wrong-input");
        emailErr.classList.add("hidden");
      } else {
        emailAddress.classList.add("wrong-input");
        emailErr.classList.remove("hidden");
      }
    }
  });
}

let toggleInputType = document.getElementById("toggleInputType");
let password = document.getElementById("password");
if (toggleInputType) {
  toggleInputType.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
}
// register

// login
var loginEmailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+.[a-zA-Z0-9]+)+$"
);
let loginEmailAddress = document.getElementById("loginEmailAddress");
let loginEmailErr = document.getElementById("loginEmailErr");
if (loginEmailAddress) {
  loginEmailAddress.addEventListener("keyup", () => {
    if (loginEmailAddress.value) {
      let status = loginEmailRegex.test(loginEmailAddress.value.toLowerCase());
      if (status) {
        loginEmailAddress.classList.remove("wrong-input");
        loginEmailErr.classList.add("hidden");
      } else {
        loginEmailAddress.classList.add("wrong-input");
        loginEmailErr.classList.remove("hidden");
      }
    }
  });
}

let loginToggleInputType = document.getElementById("loginToggleInputType");
let loginPassword = document.getElementById("loginPassword");
if (loginToggleInputType) {
  loginToggleInputType.addEventListener("click", () => {
    if (loginPassword.type === "password") {
      loginPassword.type = "text";
    } else {
      loginPassword.type = "password";
    }
  });
}
// login

// verification-code
var Numregex = new RegExp("^[0-9]+$");
let verifySixDigitsCode = document.getElementById("verifySixDigitsCode");
let codeErr = document.getElementById("codeErr");
let codeInpBg = document.getElementById("codeInpBg");
let counter = document.getElementById("counter");

if (verifySixDigitsCode) {
  verifySixDigitsCode.addEventListener("keyup", () => {
    let res = Numregex2.test(verifySixDigitsCode.value);
    if (!res || verifySixDigitsCode.value.length < 6) {
      sixDigitsRes = false;
      verifySixDigitsCode.classList.add("wrong-input");
      codeErr.classList.remove("hidden")
    } else {
      sixDigitsRes = true;
      verifySixDigitsCode.classList.remove("wrong-input");
      codeErr.classList.add("hidden");
    }


  });
}


let newCode = document.getElementById("newCode");
let countingBg = document.getElementById("countingBg");

if (counter) {
  window.addEventListener("load", () => {
    const counting = setInterval(() => {
      counter.innerHTML = parseInt(counter.innerHTML) - 1;

      if (parseInt(counter.innerHTML) <= 0) {
        clearInterval(counting);
        newCode.classList.remove("hidden");
        countingBg.classList.add("hidden");
      }
    }, 1000);

    if (newCode) {
      newCode.addEventListener("click", () => {
        newCode.classList.add("hidden");
        countingBg.classList.remove("hidden");
        counter.innerHTML = 5;
        const counting = setInterval(() => {
          counter.innerHTML = parseInt(counter.innerHTML) - 1;

          if (parseInt(counter.innerHTML) <= 0) {
            clearInterval(counting);
            newCode.classList.remove("hidden");
            countingBg.classList.add("hidden");
          }
        }, 1000);
      });
    }
  });
}
// verification-code

// forget-password
var forgetEmailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+.[a-zA-Z0-9]+)+$"
);
let forgetEmailAddress = document.getElementById("forgetEmailAddress");
let forgetEmailErr = document.getElementById("forgetEmailErr");
if (forgetEmailAddress) {
  forgetEmailAddress.addEventListener("keyup", () => {
    if (forgetEmailAddress.value) {
      let status = loginEmailRegex.test(forgetEmailAddress.value.toLowerCase());
      if (status) {
        forgetEmailAddress.classList.remove("wrong-input");
        forgetEmailErr.classList.add("hidden");
      } else {
        forgetEmailAddress.classList.add("wrong-input");
        forgetEmailErr.classList.remove("hidden");
      }
    }
  });
}

// forget-password

// panel
let tradingprofitChart = document.getElementById("tradingprofitChart");
let tradingprofitChart2 = document.getElementById("tradingprofitChart2");
document.addEventListener("DOMContentLoaded", function () {
  if (tradingprofitChart) {
    const chart = Highcharts.chart("tradingprofitChart", {
      chart: {
        type: "areaspline",
        margin: 10,
        lineWidth: 10,
        backgroundColor: null,
        labels: {
          enabled: false,
        },
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: ["Apples", "Bananas", "Oranges"],
        min: 0.5,
        max: 4.5,
        tickLength: 0,
        lineColor: "#31394C",
        gridLineColor: "#31394C",

        labels: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        tickLength: 0,
        lineColor: "#31394C",
        gridLineColor: "#31394C",
        labels: {
          enabled: false,
        },
      },
      tooltip: {
        backgroundColor: "transparent",
        borderWidth: 0,
        useHTML: true,
        formatter: function () {
          return "<b>" + this.y + "</b>";
        },
        shadow: false,
        shape: "circle",
        style: {
          color: "#2CCD70",
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Jane",
          data: [4, 2, 3, 2, 5, 4],
          color: "#414B61",
          lineWidth: 6,
          showInLegend: false,
          marker: {
            enabled: false,
            fillColor: "#fff",
          },
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, "#414B61"],
              [1, "#31394c"],
            ],
          },
        },
      ],
    });
  }

  if (tradingprofitChart2) {
    const chart2 = Highcharts.chart("tradingprofitChart2", {
      chart: {
        type: "areaspline",
        margin: 10,
        lineWidth: 10,
        backgroundColor: null,
        labels: {
          enabled: false,
        },
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: ["Apples", "Bananas", "Oranges"],
        min: 0.5,
        max: 4.5,
        tickLength: 0,
        lineColor: "#31394C",
        gridLineColor: "#31394C",

        labels: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        tickLength: 0,
        lineColor: "#31394C",
        gridLineColor: "#31394C",
        labels: {
          enabled: false,
        },
      },
      tooltip: {
        backgroundColor: "transparent",
        borderWidth: 0,
        useHTML: true,
        formatter: function () {
          return "<b>" + this.y + "</b>";
        },
        shadow: false,
        shape: "circle",
        style: {
          color: "#2CCD70",
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Jane",
          data: [0, 2, 5, 2, 3, 1],
          color: "#414B61",
          lineWidth: 6,
          showInLegend: false,
          marker: {
            enabled: false,
            fillColor: "#fff",
          },
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, "#414B61"],
              [1, "#31394c"],
            ],
          },
        },
      ],
    });
  }
});

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tabContent1 = document.getElementById("tabContent1");
let tabContent2 = document.getElementById("tabContent2");

if (tab1) {
  tab1.addEventListener("click", () => {
    tabContent1.classList.remove("hidden");
    tabContent2.classList.add("hidden");
    tab1.classList.remove("opacity-50");
    tab1.classList.add("bg-[#31394C]");
    tab2.classList.add("opacity-50");
    tab2.classList.remove("bg-[#31394C]");
  });
}

if (tab2) {
  tab2.addEventListener("click", () => {
    tabContent1.classList.add("hidden");
    tabContent2.classList.remove("hidden");
    tab2.classList.remove("opacity-50");
    tab2.classList.add("bg-[#31394C]");
    tab1.classList.add("opacity-50");
    tab1.classList.remove("bg-[#31394C]");
  });
}

var swiper10 = new Swiper(".panelSwiper", {
  direction: "vertical",
  spaceBetween: 20,
});
// panel

// panel-management
let openModalBtn = document.getElementById("openModalBtn");
let backwardToPanelBtn = document.getElementById("backwardToPanelBtn");
let deleteModal = document.getElementById("deleteModal");
let cover = document.getElementById("cover");

if (openModalBtn) {
  openModalBtn.addEventListener("click", () => {
    cover.classList.remove("opacity-0", "invisible");
    deleteModal.classList.remove("opacity-0", "invisible");
    deleteModal.classList.add("!bottom-0");
  });
}

if (backwardToPanelBtn) {
  backwardToPanelBtn.addEventListener("click", () => {
    cover.classList.add("opacity-0", "invisible");
    deleteModal.classList.add("opacity-0", "invisible");
    deleteModal.classList.remove("!bottom-0");
  });
}

if (cover && deleteModal) {
  cover.addEventListener("click", () => {
    cover.classList.add("opacity-0", "invisible");
    deleteModal.classList.add("opacity-0", "invisible");
    deleteModal.classList.remove("!bottom-0");
  });
}

// panel-management

// buy-new-plan-slider
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1.2,
  spaceBetween: 35,
});
// buy-new-plan-slider

// buy-new-plan
let cover2 = document.getElementById("cover2");
let warningModal = document.getElementById("warningModal");
let closeWarningModal = document.getElementById("closeWarningModal");

window.addEventListener("load", () => {
  if (warningModal) {
    setTimeout(() => {
      warningModal.classList.remove("translate-y-[70%]", "opacity-0", "invisible");
      warningModal.classList.add("translate-y-[50%]");
      cover2.classList.remove("opacity-0", "invisible");
    }, 700)
  }
})

if (closeWarningModal) {
  closeWarningModal.addEventListener("click", () => {
    warningModal.classList.add(
      "translate-y-[70%]",
      "opacity-0",
      "invisible"
    );
    warningModal.classList.remove("translate-y-[50%]");
    cover2.classList.add("opacity-0", "invisible");
  })
}

if (cover2) {
  cover2.addEventListener("click", () => {
    warningModal.classList.add("translate-y-[70%]", "opacity-0", "invisible");
    warningModal.classList.remove("translate-y-[50%]");
    cover2.classList.add("opacity-0", "invisible");
  });
}
// buy-new-plan

// buy-new-plan-ticket
let copyToken = document.getElementById("copyToken");
let copied = document.getElementById("copied");
let token = document.getElementById("token");

if (copyToken) {
  copyToken.addEventListener("click", () => {
    navigator.clipboard.writeText(token.value);
    copied.classList.remove("translate-x-[100%]", "opacity-0")
    setTimeout(() => {
      copied.classList.add("translate-x-[100%]", "opacity-0");
    }, 4000)
  })
}
// buy-new-plan-ticket

// history
let historyTab = document.getElementsByClassName("history-tab");
let historyContent = document.getElementsByClassName("history-content");

if (historyTab) {
  for (let index = 0; index < historyTab.length; index++) {
    historyTab[index].addEventListener("click", () => {
      for (let i = 0; i < historyContent.length; i++) {
        historyContent[i].classList.add("hidden");
      }
      historyContent[index].classList.remove("hidden")

      for (let j = 0; j < historyTab.length; j++) {
        historyTab[j].classList.add("opacity-30");
      }
      historyTab[index].classList.remove("opacity-30");
    })
  }
}
// history

// success-payment-deposit
let copyTokenAddress = document.getElementById("copyTokenAddress");
let copiedText = document.getElementById("copiedText");

if (copyTokenAddress) {
  copyTokenAddress.addEventListener("click", () => {

    navigator.clipboard.writeText(copyTokenAddress.innerHTML);
    copyTokenAddress.classList.add("opacity-0", "invisible")
    copiedText.classList.remove("opacity-0", "invisible", "left-10")
    copiedText.classList.add("left-0")

    setTimeout(() => {
      copyTokenAddress.classList.remove("opacity-0", "invisible");
      copiedText.classList.add("opacity-0", "invisible", "left-10");
      copiedText.classList.remove("left-0");
    }, 4000)
  })
}
// success-payment-deposit

// wallet-management
let acc = document.getElementsByClassName("acc")

if (acc) {
  for (let index = 0; index < acc.length; index++) {
    acc[index].addEventListener("click", () => {
      let content = acc[index].nextElementSibling;
      let height = content.offsetHeight;
      let icon = acc[index].querySelector("i")
      icon.classList.toggle("rotate-180")
      content.classList.toggle(`max-h-[700px]`);
      content.classList.toggle('pb-6')
    })
  }
}
// wallet-management

// two-step
let copyBarcode = document.getElementById("copyBarcode");
let copiedBarcode = document.getElementById("copiedBarcode");
let barcode = document.getElementById("barcode");

if (copyBarcode) {
  copyBarcode.addEventListener("click", () => {
    navigator.clipboard.writeText(barcode.value);
    copiedBarcode.classList.remove("translate-x-[100%]", "opacity-0");
    setTimeout(() => {
      copiedBarcode.classList.add("translate-x-[100%]", "opacity-0");
    }, 4000);
  });
}

let copyRecoverCode = document.getElementById("copyRecoverCode");
let copiedRecoverCode = document.getElementById("copiedRecoverCode");
let recoveryCode = document.getElementById("recoveryCode");

if (copyRecoverCode) {
  copyRecoverCode.addEventListener("click", () => {
    navigator.clipboard.writeText(barcode.value);
    copiedRecoverCode.classList.remove("translate-x-[100%]", "opacity-0");
    setTimeout(() => {
      copiedRecoverCode.classList.add("translate-x-[100%]", "opacity-0");
    }, 4000);
  });
}

let activateModal = document.getElementById("activateModal");
let sixDigitsCode = document.getElementById("sixDigitsCode");
let activateTwoSteps = document.getElementById("activateTwoSteps");
let remember = document.getElementById("remember");
var Numregex2 = new RegExp("^[0-9]+$");
let sixDigitsRes = false;

if (sixDigitsCode) {
  sixDigitsCode.addEventListener("keyup", () => {
    let res = Numregex2.test(sixDigitsCode.value);
    if (!res || sixDigitsCode.value.length < 6) {
      sixDigitsRes = false;
      sixDigitsCode.classList.add("wrong-input")
    } else {
      sixDigitsRes = true;
      sixDigitsCode.classList.remove("wrong-input");
    }


    if (remember.checked && sixDigitsRes) {
      activateTwoSteps.classList.remove("dis-btn");
      activateTwoSteps.disabled = false;
    } else {
      activateTwoSteps.classList.add("dis-btn");
      activateTwoSteps.disabled = true;
    }


  })
}

if (remember) {
  remember.addEventListener("change", () => {
    if (remember.checked && sixDigitsRes) {
      activateTwoSteps.classList.remove("dis-btn");
      activateTwoSteps.disabled = false;
    } else {
      activateTwoSteps.classList.add("dis-btn");
      activateTwoSteps.disabled = true;
    }
  })
}

if (sixDigitsCode) {
  window.addEventListener("load", () => {
    sixDigitsCode.value = ''
  })
}

if (activateTwoSteps) {
  activateTwoSteps.addEventListener("click", () => {
    cover.classList.remove("opacity-0", "invisible");
    activateModal.classList.remove("opacity-0", "invisible");
    activateModal.classList.add("!bottom-0");
  });
}


if (cover && activateModal) {
  cover.addEventListener("click", () => {
    cover.classList.add("opacity-0", "invisible");
    activateModal.classList.add("opacity-0", "invisible");
    activateModal.classList.remove("!bottom-0");
  });
}


let twoStepAcc = document.getElementsByClassName("two-step-acc");
let openedAcc = -1

if (twoStepAcc) {
  for (let index = 0; index < twoStepAcc.length; index++) {
    twoStepAcc[index].addEventListener("click", () => {
      let content = twoStepAcc[index].nextElementSibling;
      let height = content.offsetHeight;
      let icon = twoStepAcc[index].querySelector("i");
      let checkedIcon = twoStepAcc[index].querySelector(".check");
      let unCheckedIcon = twoStepAcc[index].querySelector(".uncheck");


      if (index === 0) {
        checkedIcon.classList.remove("hidden");
        unCheckedIcon.classList.add("hidden");
      }


      if (index === openedAcc + 1) {
        icon.classList.toggle("rotate-180");
        content.classList.toggle(`max-h-[700px]`);
        content.classList.toggle("pb-6");
        openedAcc = index
        checkedIcon.classList.remove('hidden')
        unCheckedIcon.classList.add('hidden')
      } else if (index === openedAcc - 1) {
        icon.classList.toggle("rotate-180");
        content.classList.toggle(`max-h-[700px]`);
        content.classList.toggle("pb-6");
        openedAcc = index
      } else if (index === openedAcc) {
        icon.classList.toggle("rotate-180");
        content.classList.toggle(`max-h-[700px]`);
        content.classList.toggle("pb-6");
      }

    });
  }
}
// two-step

// reset-password
let toggleInput = document.getElementsByClassName("toggleInput");
let passwords = document.getElementsByClassName("password");
let passwordError = document.getElementsByClassName("passwordError");

for (let index = 0; index < toggleInput.length; index++) {
  if (toggleInput[index]) {
    toggleInput[index].addEventListener("click", () => {
      if (passwords[index].type === "password") {
        passwords[index].type = "text";
      } else {
        passwords[index].type = "password";
      }
    });
  }
}

for (let x = 0; x < passwords.length; x++) {
  if (passwords[x]) {
    passwords[x].addEventListener("keyup", () => {
      if (passwords[0].value.length > 0 && passwords[1].value.length > 0) {

        if (passwords[0].value !== passwords[1].value) {
          for (let index = 0; index < passwords.length; index++) {
            passwords[index].classList.add("wrong-input");
            passwordError[index].classList.remove("hidden");
          }
        } else {
          for (let index = 0; index < passwords.length; index++) {
            passwords[index].classList.remove("wrong-input");
            passwordError[index].classList.add("hidden");
          }
        }

      } else {
        for (let index = 0; index < passwords.length; index++) {
          passwords[index].classList.remove("wrong-input");
          passwordError[index].classList.add("hidden");
        }
      }
    })
  }
}
// reset-password

// FAQ
let FAQAcc = document.getElementsByClassName("FAQAcc");

if (FAQAcc) {
  for (let index = 0; index < FAQAcc.length; index++) {
    FAQAcc[index].addEventListener("click", () => {
      let content = FAQAcc[index].nextElementSibling;
      let icon = FAQAcc[index].querySelector("i");

      for (let i = 0; i < FAQAcc.length; i++) {
        if (i !== index) {
          let content = FAQAcc[i].nextElementSibling;
          let icon = FAQAcc[i].querySelector("i");
          icon.classList.remove("rotate-180");
          content.classList.remove(`max-h-[700px]`);
          content.classList.remove("pb-6");
        }
      }

      icon.classList.toggle("rotate-180");
      content.classList.toggle(`max-h-[700px]`);
      content.classList.toggle("pb-6");

    });
  }
}
// FAQ

// toast
let errorBtns = document.getElementsByClassName("errorToastOpen");
let successBtns = document.getElementsByClassName("successToastOpen");
let warningBtns = document.getElementsByClassName("warningToastOpen");
let infoBtns = document.getElementsByClassName("infoToastOpen");


for (let e = 0; e < errorBtns.length; e++) {
  if (errorBtns[e]) {
    errorBtns[e].addEventListener("click", () => {
      var myToast = Toastify({
        text: "این یک پیام اعلان خطا می باشد که می توانید آن را تغییر دهید و استایل دهی کنید",
        duration: 5000,
        position: "center",
        classeName: ".error-toast",
        style: {
          background: "#EB876B"
        },
      });
      myToast.showToast()
    })
  }
}

for (let s = 0; s < errorBtns.length; s++) {
  if (successBtns[s]) {
    successBtns[s].addEventListener("click", () => {
      var myToast = Toastify({
        text: "این یک پیام اعلان موفق می باشد که می توانید آن را تغییر دهید و استایل دهی کنید",
        duration: 5000,
        position: "center",
        classeName: ".error-toast",
        style: {
          background: "#2CCD70",
        },
      });
      myToast.showToast();
    });
  }
}


for (let w = 0; w < errorBtns.length; w++) {
  if (warningBtns[w]) {
    warningBtns[w].addEventListener("click", () => {
      var myToast = Toastify({
        text: "این یک پیام اعلان اخطار می باشد که می توانید آن را تغییر دهید و استایل دهی کنید",
        duration: 5000,
        position: "center",
        classeName: ".error-toast",
        style: {
          background: "#F1C40F",
        },
      });
      myToast.showToast();
    });
  }
}


for (let f = 0; f < errorBtns.length; f++) {
  if (infoBtns[f]) {
    infoBtns[f].addEventListener("click", () => {
      var myToast = Toastify({
        text: "این یک پیام اعلان توضیحی می باشد که می توانید آن را تغییر دهید و استایل دهی کنید",
        duration: 5000,
        position: "center",
        classeName: ".error-toast",
        style: {
          background: "#0078FF",
        },
      });
      myToast.showToast();
    });
  }
}

// toast
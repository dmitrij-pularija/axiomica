import { Notify } from "notiflix/build/notiflix-notify-aio";

export function messages(type) {
    switch (type) {
      case "info":
        Notify.info(
          `💡 Too many matches found. Please enter a more specific name.`,
          {
            useIcon: false,
            cssAnimationStyle: "from-top",
            position: "center-top",
            borderRadius: "25px",
            width: "250px",
          }
        );
        break;
  
      case "error":
        Notify.failure(`❌ Oops, there is no country with that name`, {
          useIcon: false,
          cssAnimationStyle: "from-top",
          position: "center-top",
          borderRadius: "25px",
          width: "250px",
        });
        break;
    }
  }
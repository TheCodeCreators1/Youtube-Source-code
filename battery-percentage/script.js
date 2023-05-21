initBattery();

function initBattery() {
  const batteryLiquid = document.querySelector(".battery_liquid"),
    batteryStatus = document.querySelector(".battery_status"),
    batteryPercentage = document.querySelector(".battery_percentage");

  navigator.getBattery().then((batt) => {
    updateBattery = () => {
      let level = Math.floor(batt.level * 100);
      batteryPercentage.innerHTML = level + "%";
      batteryLiquid.style.width = `${parseInt(batt.level * 100)}%`;


      if (level == 100) {
        batteryStatus.innerHTML = `<i class="ri-battery-2-fill green-color"></i> Fully Charged`;
        batteryLiquid.style.width = "103%";
      } else if ((level <= 20) & !batt.charging) {
        batteryStatus.innerHTML = `<i class="ri-plug-line animated-red"></i> Low battery`;
      } else if (batt.charging) {
        batteryStatus.innerHTML = `<i class="ri-flashlight-line animated-green"></i> Charging...`;
      } else {
        batteryStatus.innerHTML = "";
      }



      if (level <= 20) {
        batteryLiquid.classList.add("gradient-color-red");
        batteryLiquid.classList.remove(
          "gradient-color-orange",
          "gradient-color-yellow",
          "gradient-color-green"
        );

      } else if (level <= 40) {
        batteryLiquid.classList.add("gradient-color-orange");
        batteryLiquid.classList.remove(
          "gradient-color-red",
          "gradient-color-yellow",
          "gradient-color-green"
        );

      } else if (level <= 80) {
        batteryLiquid.classList.add("gradient-color-yellow");
        batteryLiquid.classList.remove(
          "gradient-color-red",
          "gradient-color-orange",
          "gradient-color-green"
        );

      } else {
        batteryLiquid.classList.add("gradient-color-green");
        batteryLiquid.classList.remove(
          "gradient-color-red",
          "gradient-color-orange",
          "gradient-color-yellow"
        );
      }
    };
    updateBattery();

    batt.addEventListener("chargingchange", () => {
        updateBattery();
    });
    batt.addEventListener("levelchange", () => {
        updateBattery();
    });
  });
}
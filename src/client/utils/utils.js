export default {
  /**
   * Returns true if it is locally daytime.
   * Returns false if it is locally nighttime.
   */
  isDayTime() {
    const time = (new Date()).getHours();
    return (time > 7 && time < 17);
  },

  formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
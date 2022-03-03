function DisableControls(Glide, Components, Events) {
  const PREV_CONTROL_SELECTOR = "[data-glide-dir='<']";
  const NEXT_CONTROL_SELECTOR = "[data-glide-dir='>']";
  const component = {
    buildAfter() {
      this.prevBtn = Components.Html.root.querySelector(PREV_CONTROL_SELECTOR);
      this.nextBtn = Components.Html.root.querySelector(NEXT_CONTROL_SELECTOR);
    },
    handleDisable() {
      const perView = Glide.settings.perView;
      const slidesCount = Components.Html.slides.length;

      this.prevBtn.disabled = Glide.index <= 0;
      this.nextBtn.disabled = Glide.index >= slidesCount - perView;

      this.prevBtn.style.opacity = this.prevBtn.disabled ? "0" : "0.8";
      this.nextBtn.style.opacity = this.nextBtn.disabled ? "0" : "0.8";
    },
  };

  Events.on("build.after", function () {
    component.buildAfter();
    component.handleDisable();
  });

  Events.on("run.after", function () {
    component.handleDisable();
  });
  return component;
}

const glide = new Glide(".glide");

glide.mount({
  DisableControls,
});

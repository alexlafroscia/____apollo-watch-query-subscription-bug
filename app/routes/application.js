import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  setupController(controller) {
    controller.fetchModel.perform();
  }
}

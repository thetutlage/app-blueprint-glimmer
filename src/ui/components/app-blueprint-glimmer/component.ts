import Component, { tracked } from '@glimmer/component';

import KayakoApp from '@kayako/app';

export default class AppBlueprintGlimmer extends Component {

  @tracked ready: boolean = false;

  constructor(options) {
    super(options);

    const app = new KayakoApp();
    app.onReady(() => {
      this.ready = true;
    });
  }

}

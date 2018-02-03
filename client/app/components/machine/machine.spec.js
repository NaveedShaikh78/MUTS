import MachineModule from './machine';
import MachineController from './machine.controller';
import MachineComponent from './machine.component';
import MachineTemplate from './machine.html';

describe('Machine', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MachineModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MachineController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MachineTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MachineComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MachineTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MachineController);
    });
  });
});

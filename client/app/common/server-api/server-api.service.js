export default class HttpService {

  constructor($http, $httpParamSerializer, Application) {
    'ngInject';
    this.Application = Application;
    this.$http = $http;
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    console.log($http);
    this.$httpParamSerializer = $httpParamSerializer;
  }

  SetCUId(id) {
    this.cuid = id;
  }

  loadapi(api, data = {}, spin = true) {
    if(spin) {
      this.Application.spinOn();
    }
    if (this.cuid) {
      data.cuid = this.cuid;
    }
    const param = this.$httpParamSerializer(data);
    return this.$http({
      method: 'POST',
      url: `http://harisautomation.com/global/api/${api}`,
      data: param
    }).then(response => {
      return response;
    }).catch(e => {
      setTimeout(() => { }, 3000);
      return this.loadapi(api, data);
    }).then(response => {
      this.Application.spinOff();
      return response;
    });
  }
}
// HttpService.$inject = ['$http', '$httpParamSerializer'];

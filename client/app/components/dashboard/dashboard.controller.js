import { Machine } from '../../models/machine';
import utility from '../../common/utility';
class DashboardController {
  constructor(HttpService, Application) {
    'ngInject'; // this statement needed to inject service in constructor(controller)
    console.log("DashBoard: DashBoard Loaded successfully");
    this.app = Application;
    this.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney"
        }];
    //this.machines = [26, 13, 6, 5, 22, 27, 17];
    this.machines = [
      new Machine(26, "Machine 1"),
      new Machine(13, "Machine 2"),
      new Machine(6, "Machine 3"),
      new Machine(5, "Machine 4"),
      new Machine(22, "Machine 6"),
      new Machine(27, "Machine 7"),
      new Machine(17, "Machine 8"),
    ];
    // Login to Server
    var apiParam = { 'username': 'global', 'password': 'global@#', 'cuid': "" };
    
    HttpService
      .loadapi("login.php", apiParam)
      .then(response => HttpService.SetCUId(response.data));
    setInterval(() => { this.getCurrentStatus(HttpService) }, 1000);

    this.machines.forEach(machine=>{
      machine.app = Application;
    })
    // Loading Idle List
    var apiParam = { "rtype": "getData" };
    HttpService.loadapi("idle.php", apiParam)
    .then(response => Application.idleList = response.data);
    HttpService.loadapi("job.php", apiParam)
    .then(response => Application.jobList = response.data);
    HttpService.loadapi("operator.php", apiParam)
    .then(response => Application.operatorList = response.data);
    

  }
 
  getCurrentStatus(HttpService) {
    HttpService
      .loadapi("machinestatus.php", {}, false)
      .then(response => {
        this.machines.forEach(function (machine) {

          if (response.data[0] == "Failed") {
            showLoginDialog();
            return;
          }
          var machineData = response.data[machine.id];
          if (machine) {
            // ctrl.MachineController.setSelIdle(sdata[ioports[i]].idleid, ioports[i]);
            var mactime = new Date(machineData.statetime);
            var tmsec = Date.now() - mactime;
            var HHmmss = utility.miliSecToHms(tmsec);
            machine.cycleTimer = HHmmss;
            machine.jobCount = machineData.count;
            machine.selOperator = {id: machineData.opid};
            machine.selJob = {id: machineData.jobid};
            machine.selIdle = {id: machineData.idleid};
            machine.state = machineData.status === '1' ? 'on' : 'off';
          }
        });
      });
  }
}

export default DashboardController;

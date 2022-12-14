const { DataSource } = require("apollo-datasource");
const sessions = require("../sessions.json");
const _ = require("lodash")

class SessionAPI extends DataSource {
  constructor() {
    super();
  }
  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }
  getSessionById(id){
    const session = _.filter(sessions, {id:parseInt(id)})
    return session[0]
  }
  getSpeakers(){

    return 0
  }
}


module.exports = SessionAPI
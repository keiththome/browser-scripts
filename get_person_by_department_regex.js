function getPersonByDepartmentRegex (dep) {
  // Generate a of email addresses based on person department regex by Principal, Department, Email
  //
  // Created by: Matt Burch
  // Usage: getPersonByDepartmentRegex(/CIO/)
  //

  if (dep && typeof dep !== 'object') {
    return console.log('Department regex can not be a string, must be an object')
  }
  var projectId = Session.get('projectId')

  var people = People.find({
    projectId: projectId,
    department: {
      $regex: dep
    }
  }).fetch()

  people.forEach( function(p) {
    console.log("'" + p.principalName + "','" + p.department + "','" + p.emails.join(" ") + "'")
  })
  console.log("returned: " + people.len() + " results")
}

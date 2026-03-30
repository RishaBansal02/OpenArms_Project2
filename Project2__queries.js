// QUERY 1: Aggregation Query
// Counts how many cases each case worker is managing

db.client.aggregate([       
  { $unwind: "$cases" },   
  { $group: {               
      _id: "$cases.case_worker_id",  
      totalCases: { $sum: 1 }       
  }},

  { $sort: { totalCases: -1 } }  
]);

// QUERY 2: Complex Search Query
// Finds clients who have an open case AND a scheduled appointment

db.client.find({        
  $and: [                   
    { "cases.status": "open" },              
    { "appointments.status": "scheduled" }  
  ]

});

// QUERY 3: Count Query
// Counts how many appointments a specific client has

db.client.aggregate([       
  { $match: { _id: "client_101" } },   
  { $project: {              
      name: 1,               
      totalAppointments: { $size: "$appointments" } 
  }}

]);


// QUERY 4: Update Query
// Flips the availability of a service on or off (like disabling a service)

db.organization.updateOne(  
  { _id: "org_1", "services.service_id": "svc_301" },  
  { $set: { "services.$.availability": false } }
);

// QUERY 5: Find clients referred to a specific service
// Finds all clients who were referred to service svc_301

db.client.find(          
  { "cases.referrals.service_id": "svc_301" },
  {
    name: 1,             
    "cases.referrals": 1    
  }
);
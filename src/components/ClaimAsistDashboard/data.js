export const claims = [
    {
      id: "#12345",
      policyNumber: "98765-43",
      policyHolder: "Sarah Johnson",
      claimType: "Auto Accident",
      status: "Pending Review",
      amount: "$5,250.00",
      details: {
        policyInfo: {
          monthsCustomer: "36",
          policyCSL: "250/500",
          deductible: "$1,000",
          annualPremium: "$1,200",
          umbrellaLimit: "$2M"
        },
        insuredDetails: {
          age: "35",
          zipCode: "90210",
          gender: "Female",
          education: "Bachelor's",
          occupation: "Engineer",
          hobbies: "Golf"
        },
        incidentInfo: {
          date: "Jan 10, 2025",
          type: "Multi-vehicle collision",
          severity: "Major",
          location: "Highway 101",
          time: "14:30",
          vehiclesInvolved: "3"
        }
      }
    },
    {
      id: "#12346",
      policyNumber: "98765-44",
      policyHolder: "Michael Chen",
      claimType: "Property Damage",
      status: "AI Approved",
      amount: "$3,800.00",
      details: {
        policyInfo: {
          monthsCustomer: "24",
          policyCSL: "100/300",
          deductible: "$500",
          annualPremium: "$900",
          umbrellaLimit: "$1M"
        },
        insuredDetails: {
          age: "42",
          zipCode: "90211",
          gender: "Male",
          education: "Master's",
          occupation: "Architect",
          hobbies: "Photography"
        },
        incidentInfo: {
          date: "Feb 15, 2025",
          type: "Property damage",
          severity: "Minor",
          location: "Residential area",
          time: "10:15",
          vehiclesInvolved: "1"
        }
      }
    }
  ];
// 1️⃣ JSON data source
const selectedData = {};
const data = [{

    Juvéderm: [{
        Name: "Juvéderm Ultra",
        BrandColor: "#c57861",
        Elasticity: "156",
        Cohesivity: "96",
        WaterUptake: "580",
        Ha: "24",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "30.8",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Ultra XC",
        BrandColor: "#dda290",
        Elasticity: "207",
        Cohesivity: "96",
        WaterUptake: "622",
        Ha: "24",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "34",
        LiftCapacity: [{
            Day: 0,
            Value: "1.34",
          },
          {
            Day: 0.14,
            Value: "1.26",
          },
          {
            Day: 1,
            Value: "1.23",
          },
          {
            Day: 2,
            Value: "1.16",
          },
          {
            Day: 4,
            Value: "0.85",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.65",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra XC-1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra XC-4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Ultra Plus",
        BrandColor: "#ce8771",
        Elasticity: "214",
        Cohesivity: "116",
        WaterUptake: "515",
        Ha: "24",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "12.6",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Ultra Plus XC",
        BrandColor: "#c08979",
        Elasticity: "263",
        Cohesivity: "112",
        WaterUptake: "454",
        Ha: "24",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "14.6",
        LiftCapacity: [{
            Day: 0,
            Value: "1.38",
          },
          {
            Day: 0.14,
            Value: "1.37",
          },
          {
            Day: 1,
            Value: "1.25",
          },
          {
            Day: 2,
            Value: "1.19",
          },
          {
            Day: 4,
            Value: "0.94",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.72",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra plus XC-1 week- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/juvederm ultra plus XC-1 week- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra plus XC-4 week- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/juvederm ultra plus XC-4 week- S.png"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Ultra 2",
        BrandColor: "#bd8574",
        Elasticity: "188",
        Cohesivity: "95",
        WaterUptake: "574",
        Ha: "24",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "27.5",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra 2- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra 2- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Ultra 3",
        BrandColor: "#c98773",
        Elasticity: "238",
        Cohesivity: "104",
        WaterUptake: "426",
        Ha: "24",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "15.1",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra 3- 1 week- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/juvederm ultra 3- 1 week- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra 3- 4week- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/juvederm ultra 3- 4 week- S.png"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Ultra 4",
        BrandColor: "#c98d7b",
        Elasticity: "164",
        Cohesivity: "105",
        WaterUptake: "614",
        Ha: "24",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "27.7",
        LiftCapacity: [{
            Day: 0,
            Value: "1.53",
          },
          {
            Day: 0.14,
            Value: "1.38",
          },
          {
            Day: 1,
            Value: "1.29",
          },
          {
            Day: 2,
            Value: "1.14",
          },
          {
            Day: 4,
            Value: "1.01",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.68",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra 4- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm ultra 4- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Volbella with Lidocaine/XC (TSK 30G1/2\")",
        BrandColor: "#c98d7b",
        Elasticity: "271",
        Cohesivity: "19",
        WaterUptake: "133",
        Ha: "15",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "13.8",
        LiftCapacity: [{
            Day: 0,
            Value: "1.53",
          },
          {
            Day: 0.14,
            Value: "1.38",
          },
          {
            Day: 1,
            Value: "1.29",
          },
          {
            Day: 2,
            Value: "1.14",
          },
          {
            Day: 4,
            Value: "1.01",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.68",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm volvella- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm volvella- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },

      {
        Name: "Juvéderm Volbella with Lidocaine/XC (TSK 32G1/2\")",
        BrandColor: "#c98d7b",
        Elasticity: "271",
        Cohesivity: "19",
        WaterUptake: "133",
        Ha: "15",
        NeedleSize: "TSK 32G1/2\"",
        ExtrusionForce: "28",
        LiftCapacity: [{
            Day: 0,
            Value: "1.53",
          },
          {
            Day: 0.14,
            Value: "1.38",
          },
          {
            Day: 1,
            Value: "1.29",
          },
          {
            Day: 2,
            Value: "1.14",
          },
          {
            Day: 4,
            Value: "1.01",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.68",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm volvella- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm volvella- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },


      {
        Name: "Juvéderm Volift with lidocaine/Vollure XC  ",
        BrandColor: "#c98d7b",
        Elasticity: "340",
        Cohesivity: "30",
        WaterUptake: "184",
        Ha: "17.5",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "18.6",
        LiftCapacity: [{
            Day: 0,
            Value: "1.77",
          },
          {
            Day: 0.14,
            Value: "1.15",
          },
          {
            Day: 1,
            Value: "1.09",
          },
          {
            Day: 2,
            Value: "0.88",
          },
          {
            Day: 4,
            Value: "0.89",
          },
          {
            Day: 8,
            Value: "0.83",
          },
          {
            Day: 12,
            Value: "0.77",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm volift- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/juvederm volift- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: 'Juvéderm Voluma with lidocaine/XC',
        BrandColor: "#964c57",
        Elasticity: "398",
        Cohesivity: "40",
        WaterUptake: "227",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "15.8",
        LiftCapacity: [{
            Day: 0,
            Value: "1.73",
          },
          {
            Day: 0.14,
            Value: "1.31",
          },
          {
            Day: 1,
            Value: "1.14",
          },
          {
            Day: 2,
            Value: "1.17",
          },
          {
            Day: 4,
            Value: "1.13",
          },
          {
            Day: 8,
            Value: "1.05",
          },
          {
            Day: 12,
            Value: "0.99",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"

            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/juvederm voluma- 1 week- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/juvederm voluma- 4 week- S.png"
            }
          }
        ],
      },
      {
        Name: "Juvéderm Volux",
        BrandColor: "#bb5d6b",
        Elasticity: "665",
        Cohesivity: "93",
        WaterUptake: "253",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "16.5",
        LiftCapacity: [{
            Day: 0,
            Value: "1.59",
          },
          {
            Day: 0.14,
            Value: "1.29",
          },
          {
            Day: 1,
            Value: "1.17",
          },
          {
            Day: 2,
            Value: "1.02",
          },
          {
            Day: 4,
            Value: "1.05",
          },
          {
            Day: 8,
            Value: "1.04",
          },
          {
            Day: 12,
            Value: "0.97",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {

              image: "./assets/images/TissueIntegration/juvederm volux- 1 week- s.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {

              image: "./assets/images/TissueIntegration/juvederm volux- 4 week- s.png"
            }
          }
        ],
      },

      {
        Name: "Skinvive by Juvéderm",
        BrandColor: "#69343c",
        Elasticity: "166",
        Cohesivity: "12",
        WaterUptake: "<100",
        Ha: "12",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "19.7",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {

              image: "./assets/images/TissueIntegration/juvederm volite xc- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {

              image: "./assets/images/TissueIntegration/juvederm volite xc- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },

    ],
  },
  {
    Expression: [{
      Name: "Expression",
      BrandColor: "#a197af",
      Elasticity: "433",
      Cohesivity: "47",
      WaterUptake: "113",
      Ha: "24",
      NeedleSize: "TSK 27G1/2\"",
      ExtrusionForce: "8",
      LiftCapacity: [{
          Day: 0,
          Value: "NA",
        },
        {
          Day: 0.14,
          Value: "NA",
        },
        {
          Day: 1,
          Value: "NA",
        },
        {
          Day: 2,
          Value: "NA",
        },
        {
          Day: 4,
          Value: "NA",
        },
        {
          Day: 8,
          Value: "NA",
        },
        {
          Day: 12,
          Value: "NA",
        },
      ],
      TissueIntegration: [{
          week: "Week1",
          Intradermal: {
            image: "NA"
          },
          Subcutaneous: {
            image: "NA"
          }
        },
        {
          week: "Week4",
          Intradermal: {
            image: "NA"
          },
          Subcutaneous: {
            image: "NA"
          }
        }
      ],
    }, ]
  },
  {
    Belotero: [{
        Name: "Belotero Soft+",
        BrandColor: "#9769ee",
        Elasticity: "40",
        Cohesivity: "16",
        WaterUptake: "<100",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "20 ",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Belotero Balance+",
        BrandColor: "#6b45b3",
        Elasticity: "128",
        Cohesivity: "69",
        WaterUptake: "664",
        Ha: "22.5",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "49.3",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Belotero Intense+",
        BrandColor: "#6948a5",
        Elasticity: "255",
        Cohesivity: "115",
        WaterUptake: "700",
        Ha: "25.5",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "32.7",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Belotero Volume+",
        BrandColor: "#a385db",
        Elasticity: "438",
        Cohesivity: "97",
        WaterUptake: "370",
        Ha: "26",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "37",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Belotero Soft",
        BrandColor: "#79669b",
        Elasticity: "28",
        Cohesivity: "10",
        WaterUptake: "NA",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "16.1",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Belotero Balance",
        BrandColor: "#462780",
        Elasticity: "128",
        Cohesivity: "69",
        WaterUptake: "281",
        Ha: "22.5",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "39.5 ",
        LiftCapacity: [{
            Day: 0,
            Value: "1.41",
          },
          {
            Day: 0.14,
            Value: "1.36",
          },
          {
            Day: 1,
            Value: "1.19",
          },
          {
            Day: 2,
            Value: "0.89",
          },
          {
            Day: 4,
            Value: "0.65",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.46",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/belotero balance- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/belotero balance- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Belotero Intense",
        BrandColor: "#5527aa",
        Elasticity: "226",
        Cohesivity: "120",
        WaterUptake: "662",
        Ha: "25.5",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "35.5 ",
        LiftCapacity: [{
            Day: 0,
            Value: "1.62",
          },
          {
            Day: 0.14,
            Value: "1.59",
          },
          {
            Day: 1,
            Value: "1.37",
          },
          {
            Day: 2,
            Value: "1.31",
          },
          {
            Day: 4,
            Value: "1.06",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.67",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/belotero intense- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/belotero intense- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Belotero Volume",
        BrandColor: "#6b29e6",
        Elasticity: "388",
        Cohesivity: "90",
        WaterUptake: "394",
        Ha: "26",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: " 38.5",
        LiftCapacity: [{
            Day: 0,
            Value: "1.56",
          },
          {
            Day: 0.14,
            Value: "1.45",
          },
          {
            Day: 1,
            Value: "1.45",
          },
          {
            Day: 2,
            Value: "1.36",
          },
          {
            Day: 4,
            Value: "1.32",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "1.02",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/belotero volume- 1 week- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/belotero volume- 1 week- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/belotero volume- 4 week- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/belotero volume- 4 week- S.png"
            }
          }
        ],
      },
      {
        Name: "Belotero Revive",
        BrandColor: "#624b8d",
        Elasticity: "43",
        Cohesivity: "11",
        WaterUptake: "NA",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "17.3",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/belotero revive- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Yvoire: [{
        Name: "Yvoire - Classic",
        BrandColor: "#e9627d",
        Elasticity: "335",
        Cohesivity: "24",
        WaterUptake: "280",
        Ha: "22",
        NeedleSize: "Terumo K-pack II 30G 1/2\"",
        ExtrusionForce: "48",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Yvoire - Volume",
        BrandColor: "#c03652",
        Elasticity: "382",
        Cohesivity: "27",
        WaterUptake: "225",
        Ha: "22",
        NeedleSize: "Terumo K-pack II 23G1\"",
        ExtrusionForce: "29",
        LiftCapacity: [{
            Day: 0,
            Value: "1.29",
          },
          {
            Day: 0.14,
            Value: "1.11",
          },
          {
            Day: 1,
            Value: "1.05",
          },
          {
            Day: 2,
            Value: "1.05",
          },
          {
            Day: 4,
            Value: "1.04",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.98",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/yvoire volume- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/yvoire volume- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Yvoire - Contour",
        BrandColor: "#c96e80",
        Elasticity: "432",
        Cohesivity: "34",
        WaterUptake: "210",
        Ha: "22",
        NeedleSize: "Terumo K-pack II 27G 1/2\"",
        ExtrusionForce: "23",
        LiftCapacity: [{
            Day: 0,
            Value: "1.33",
          },
          {
            Day: 0.14,
            Value: "1.19",
          },
          {
            Day: 1,
            Value: "1.14",
          },
          {
            Day: 2,
            Value: "1.17",
          },
          {
            Day: 4,
            Value: "1.11",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "1",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/yvoire contour- 1 week- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/yvoire contour- 4 week- S.png"
            }
          }
        ],
      },
    ],
  },
  {
    Revolax: [{
        Name: "Revolax - SubQ",
        BrandColor: "#a14d90",
        Elasticity: "369",
        Cohesivity: "75",
        WaterUptake: "293",
        Ha: "24",
        NeedleSize: "Nanoneedle 25G",
        ExtrusionForce: "18",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Revolax - Deep",
        BrandColor: "#d865c1",
        Elasticity: "265",
        Cohesivity: "47",
        WaterUptake: "116",
        Ha: "24",
        NeedleSize: "Nanoneedle 27G",
        ExtrusionForce: "19",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Revolax - Fine",
        BrandColor: "#7c266b",
        Elasticity: "165",
        Cohesivity: "32",
        WaterUptake: "149",
        Ha: "24",
        NeedleSize: "Nanoneedle 30G",
        ExtrusionForce: "30",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Profhilo: [{
        Name: "Profhilo",
        BrandColor: "#c29788",
        Elasticity: "NA",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "32",
        NeedleSize: "Terumo K-pack II 29G 1/2\"",
        ExtrusionForce: "37 ",
        LiftCapacity: [{
            Day: 0,
            Value: "1.24",
          },
          {
            Day: 0.14,
            Value: "0.46",
          },
          {
            Day: 1,
            Value: "0.52",
          },
          {
            Day: 2,
            Value: "0.44",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/profhilo- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/profhilo- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Profhilo Structura",
        BrandColor: "#e2c2b6",
        Elasticity: "NA",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "45",
        NeedleSize: "TSK 25G 1/2\"",
        ExtrusionForce: "52",
        LiftCapacity: [{
            Day: 0,
            Value: "1.22",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Saypha: [{
        Name: "Saypha Rich",
        BrandColor: "#2a9cc9",
        Elasticity: " N/A – écoulement",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "18",
        NeedleSize: "Terumo 30G1/2\"",
        ExtrusionForce: "13",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Saypha Filler",
        BrandColor: "#32bff7",
        Elasticity: "229",
        Cohesivity: "60",
        WaterUptake: "388",
        Ha: "23",
        NeedleSize: "Terumo 27G1/2\"",
        ExtrusionForce: "20",
        LiftCapacity: [{
            Day: 0,
            Value: "1.71",
          },
          {
            Day: 0.14,
            Value: "1.43",
          },
          {
            Day: 1,
            Value: "1.33",
          },
          {
            Day: 2,
            Value: "1.18",
          },
          {
            Day: 4,
            Value: "0.92",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.72",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/SAYPHA FILLER - 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/SAYPHA FILLER - 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Saypha Volume",
        BrandColor: "#68b6d4",
        Elasticity: "350",
        Cohesivity: "89",
        WaterUptake: "379",
        Ha: "23",
        NeedleSize: "Terumo 27G1/2\"",
        ExtrusionForce: "20",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Elravie: [{
        Name: "Elravie Light",
        BrandColor: "#b44aaa",
        Elasticity: "186",
        Cohesivity: "39",
        WaterUptake: "390",
        Ha: "20",
        NeedleSize: "Poonglim Pharmatech 23G1/2\"",
        ExtrusionForce: "42",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Elravie Ultra Volume",
        BrandColor: "#df43cf",
        Elasticity: "385",
        Cohesivity: "74",
        WaterUptake: "470",
        Ha: "23",
        NeedleSize: "JBP nanoneedle 27G1/2\"",
        ExtrusionForce: "10",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Elravie Deep Line",
        BrandColor: "#702369",
        Elasticity: "334",
        Cohesivity: "54",
        WaterUptake: "380",
        Ha: "23",
        NeedleSize: "JBP nanoneedle 30G1/2\"",
        ExtrusionForce: "23",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Restylane: [{
        Name: "Restylane Fynesse (Emervel Touch)",
        BrandColor: "#058cca",
        Elasticity: "134",
        Cohesivity: "30",
        WaterUptake: "677",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "15.9 ",
        LiftCapacity: [{
            Day: 0,
            Value: "1.32",
          },
          {
            Day: 0.14,
            Value: "1.08",
          },
          {
            Day: 1,
            Value: "1.07",
          },
          {
            Day: 2,
            Value: "0.87",
          },
          {
            Day: 4,
            Value: "0.59",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.45",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane Fynesse filler- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane Fynesse filler- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Restylane Refyne lidocaine (Emervel Classic)",
        BrandColor: "#40aee0",
        Elasticity: "116",
        Cohesivity: "49",
        WaterUptake: "516",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "33.4",
        LiftCapacity: [{
            Day: 0,
            Value: "1.44",
          },
          {
            Day: 0.14,
            Value: "1.29",
          },
          {
            Day: 1,
            Value: "1.29",
          },
          {
            Day: 2,
            Value: "1.12",
          },
          {
            Day: 4,
            Value: "0.94",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.69",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane Refyne lidocaine- 1 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane Refyne lidocaine- 4 week- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Restylane Kysse lidocaine (Emervel Lips)",
        BrandColor: "#75aec9",
        Elasticity: "236",
        Cohesivity: "85",
        WaterUptake: "373",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "59",
        LiftCapacity: [{
            Day: 0,
            Value: "1.51",
          },
          {
            Day: 0.14,
            Value: "1.15",
          },
          {
            Day: 1,
            Value: "1.26",
          },
          {
            Day: 2,
            Value: "1.13",
          },
          {
            Day: 4,
            Value: "1.02",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.85",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Kysse lidocaine- 1 WEEK- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Kysse lidocaine- 4 WEEK- S.png"
            }
          }
        ],
      },
      {
        Name: "Restylane Defyne lidocaine (Emervel Deep)",
        BrandColor: "#1b7daa",
        Elasticity: "342",
        Cohesivity: "60",
        WaterUptake: "318",
        Ha: "20",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "17.4",
        LiftCapacity: [{
            Day: 0,
            Value: "1.37",
          },
          {
            Day: 0.14,
            Value: "1.22",
          },
          {
            Day: 1,
            Value: "1.24",
          },
          {
            Day: 2,
            Value: "1.18",
          },
          {
            Day: 4,
            Value: "1.09",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.9",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Defyne lidocaine - 1 WEEK- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Defyne lidocaine - 4 WEEK- S.png"
            }
          }
        ],
      },
      {
        Name: "Restylane Volyme lidocaine (Emervel Volume)",
        BrandColor: "#49a8d4",
        Elasticity: "239",
        Cohesivity: "91",
        WaterUptake: "354",
        Ha: "20",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "19.7",
        LiftCapacity: [{
            Day: 0,
            Value: "1.44",
          },
          {
            Day: 0.14,
            Value: "1.31",
          },
          {
            Day: 1,
            Value: "1.25",
          },
          {
            Day: 2,
            Value: "1.21",
          },
          {
            Day: 4,
            Value: "0.99",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.79",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: ""
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Volyme lidocaine - 1 WEEK- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Volyme lidocaine - 4 WEEK- S.png"
            }
          }
        ],
      },
      {
        Name: "Restylane lidocaine",
        BrandColor: "#094a68",
        Elasticity: "864",
        Cohesivity: "29",
        WaterUptake: "<100",
        Ha: "20",
        NeedleSize: "Terumo 29G1/2\"",
        ExtrusionForce: "16.4 ",
        LiftCapacity: [{
            Day: 0,
            Value: "1.31",
          },
          {
            Day: 0.14,
            Value: "1.01",
          },
          {
            Day: 1,
            Value: "1",
          },
          {
            Day: 2,
            Value: "0.97",
          },
          {
            Day: 4,
            Value: "0.93",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.81",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane lidocaine  - 1 WEEK- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane lidocaine  - 4 WEEK- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Restylane Lyps lidocaine (Restylane Lip Volume)",
        BrandColor: "#0b7cb1",
        Elasticity: "976",
        Cohesivity: "31",
        WaterUptake: "<100",
        Ha: "20",
        NeedleSize: "Terumo 29G1/2\"",
        ExtrusionForce: "21",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Restylane Lyft lidocaine (Restylane Perlane)",
        BrandColor: "#1c475a",
        Elasticity: "977",
        Cohesivity: "32",
        WaterUptake: "<100",
        Ha: "20",
        NeedleSize: "Terumo 29G1/2\"",
        ExtrusionForce: "32.8",
        LiftCapacity: [{
            Day: 0,
            Value: "1.27",
          },
          {
            Day: 0.14,
            Value: "1.06",
          },
          {
            Day: 1,
            Value: "1",
          },
          {
            Day: 2,
            Value: "0.99",
          },
          {
            Day: 4,
            Value: "0.95",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.81",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane Lyft lidocaine  - 1 WEEK- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Lyft lidocaine  - 1 WEEK- S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane Lyft lidocaine  - 4 WEEK- I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Restylane Lyft lidocaine  - 4 WEEK- S.png"
            }
          }
        ],
      },
      {
        Name: "Restylane Vital (Restylane Silk)",
        BrandColor: "#30bdff",
        Elasticity: "667",
        Cohesivity: "27",
        WaterUptake: "<100",
        Ha: "20",
        NeedleSize: "Terumo 29G1/2\"",
        ExtrusionForce: "16.2",
        LiftCapacity: [{
            Day: 0,
            Value: "1.21",
          },
          {
            Day: 0.14,
            Value: "0.92",
          },
          {
            Day: 1,
            Value: "0.96",
          },
          {
            Day: 2,
            Value: "0.9",
          },
          {
            Day: 4,
            Value: "0.73",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.57",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Restylane Vital - 1 WEEK- I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Restylane Vital Light",
        BrandColor: "#a3daf3",
        Elasticity: "84",
        Cohesivity: "12",
        WaterUptake: "<100",
        Ha: "12",
        NeedleSize: "Terumo 29G1/2\"",
        ExtrusionForce: "8.7",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Restylane SubQ lidocaine",
        BrandColor: "#12a0e2",
        Elasticity: "1055",
        Cohesivity: "42",
        WaterUptake: "<100",
        Ha: "20",
        NeedleSize: "none supplied, tested with BBD 21G1½\"",
        ExtrusionForce: "19",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  // {
  //   Ellansé: [
  //     {
  //       Name: "Ellansé-S",
  //       BrandColor: "#e29551",
  //       Elasticity: "24615",
  //       Cohesivity: "172",
  //       WaterUptake: "NA",
  //       Ha: "NA",
  //       NeedleSize: "NA",
  //       ExtrusionForce: "32.2",
  //       LiftCapacity: [
  //         {
  //           Day: 0,
  //           Value: "1.24",
  //         },
  //         {
  //           Day: 0.14,
  //           Value: "0.57",
  //         },
  //         {
  //           Day: 1,
  //           Value: "0.56",
  //         },
  //         {
  //           Day: 2,
  //           Value: "0.41",
  //         },
  //         {
  //           Day: 4,
  //           Value: "0.33",
  //         },
  //         {
  //           Day: 8,
  //           Value: "NA",
  //         },
  //         {
  //           Day: 12,
  //           Value: "0.23",
  //         },
  //       ],
  //       TissueIntegration: [
  //         {
  //           week: "Week1",
  //           Intradermal: {
  //             image: "NA"
  //           },
  //           Subcutaneous: {
  //             image: "NA"
  //           }
  //         },
  //         {
  //           week: "Week4",
  //           Intradermal: {
  //             image: "./assets/images/TissueIntegration/Ellanse╠ü-S- 4 week - I.png"
  //           },
  //           Subcutaneous: {
  //             image: "./assets/images/TissueIntegration/Ellanse╠ü-S- 4 week - S.png"
  //           }
  //         }
  //       ],
  //     },

  //     {
  //       Name: "Ellansé-M",
  //       BrandColor: "#b36623",
  //       Elasticity: "10457",
  //       Cohesivity: "89",
  //       WaterUptake: "NA",
  //       Ha: "NA",
  //       NeedleSize: "NA",
  //       ExtrusionForce: "28.7",
  //       LiftCapacity: [
  //         {
  //           Day: 0,
  //           Value: "1.07",
  //         },
  //         {
  //           Day: 0.14,
  //           Value: "0.26",
  //         },
  //         {
  //           Day: 1,
  //           Value: "0.25",
  //         },
  //         {
  //           Day: 2,
  //           Value: "0.21",
  //         },
  //         {
  //           Day: 4,
  //           Value: "0.2",
  //         },
  //         {
  //           Day: 8,
  //           Value: "NA",
  //         },
  //         {
  //           Day: 12,
  //           Value: "0.24",
  //         },
  //       ],
  //       TissueIntegration: [
  //         {
  //           week: "Week1",
  //           Intradermal: {
  //             image: "NA"
  //           },
  //           Subcutaneous: {
  //             image: "./assets/images/TissueIntegration/Ellanse╠ü-M- 1 week - S.png"
  //           }
  //         },
  //         {
  //           week: "Week4",
  //           Intradermal: {
  //             image: "./assets/images/TissueIntegration/Ellanse╠ü-M- 4 week - I.png"
  //           },
  //           Subcutaneous: {
  //             image: "./assets/images/TissueIntegration/Ellanse╠ü-M- 4 week - S.png"
  //           }
  //         },
  //       ],
  //     },
  //   ]
  // },
  {
    Revanesse: [{
        Name: "Revanesse Contour+",
        BrandColor: "#2c39f0",
        Elasticity: "268",
        Cohesivity: "44",
        WaterUptake: "349",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "15.6 ",
        LiftCapacity: [{
            Day: 0,
            Value: "1.55",
          },
          {
            Day: 0.14,
            Value: "0.92",
          },
          {
            Day: 1,
            Value: "1.09",
          },
          {
            Day: 2,
            Value: "0.98",
          },
          {
            Day: 4,
            Value: "1.06",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.63",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Revanesse ContourPlus - 4 week - I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Revanesse ContourPlus - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Revanesse Ultra+",
        BrandColor: "#3e47cc",
        Elasticity: "157",
        Cohesivity: "44",
        WaterUptake: "460",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "19",
        LiftCapacity: [{
            Day: 0,
            Value: "1.39",
          },
          {
            Day: 0.14,
            Value: "1.27",
          },
          {
            Day: 1,
            Value: "1.23",
          },
          {
            Day: 2,
            Value: "1.01",
          },
          {
            Day: 4,
            Value: "0.97",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.67",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Revanesse UltraPlus - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Revanesse UltraPlus - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Revanesse Kiss+",
        BrandColor: "#3c44b1",
        Elasticity: "NA",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "25",
        NeedleSize: "NA",
        ExtrusionForce: "NA",
        LiftCapacity: [{
            Day: 0,
            Value: "1.51",
          },
          {
            Day: 0.14,
            Value: "0.96",
          },
          {
            Day: 1,
            Value: "1.02",
          },
          {
            Day: 2,
            Value: "0.85",
          },
          {
            Day: 4,
            Value: "0.88",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.59",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Revanesse KissPlus - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Revanesse Pure",
        BrandColor: "#141850",
        Elasticity: "NA",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "14",
        NeedleSize: "NA",
        ExtrusionForce: "NA",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Revanesse Versa",
        BrandColor: "#999ff1",
        Elasticity: "NA",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "25",
        NeedleSize: "NA",
        ExtrusionForce: "NA",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Revanesse Versa_Ultra - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Revanesse Versa_Ultra - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Neauvia: [{
        Name: "Neauvia Intense",
        BrandColor: "#dd324e",
        Elasticity: "210",
        Cohesivity: "128",
        WaterUptake: ">700",
        Ha: "28",
        NeedleSize: "DermaSculpt 21G x 40 mm",
        ExtrusionForce: "22",
        LiftCapacity: [{
            Day: 0,
            Value: "1.86",
          },
          {
            Day: 0.14,
            Value: "2.01",
          },
          {
            Day: 1,
            Value: "1.89",
          },
          {
            Day: 2,
            Value: "1.65",
          },
          {
            Day: 4,
            Value: "1.35",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.94",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Neauvia Intense - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Neauvia Stimulate",
        BrandColor: "#9b3d4d",
        Elasticity: "223",
        Cohesivity: "165",
        WaterUptake: ">700",
        Ha: "26",
        NeedleSize: "DermaSculpt 21G x 40 mm",
        ExtrusionForce: "25",
        LiftCapacity: [{
            Day: 0,
            Value: "1.83",
          },
          {
            Day: 0.14,
            Value: "1.71",
          },
          {
            Day: 1,
            Value: "1.56",
          },
          {
            Day: 2,
            Value: "1.43",
          },
          {
            Day: 4,
            Value: "1.16",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.97",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Neauvia Stimulate - 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Neauvia Stimulate - 4 week - S.png"
            }
          }
        ],
      },
    ],
  },
  {
    Teosyal: [{
        Name: "Meso",
        BrandColor: "#5cb4b1",
        Elasticity: "NA",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "NA",
        NeedleSize: "NA",
        ExtrusionForce: "NA",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal PureSense First Lines",
        BrandColor: "#8ad8d5",
        Elasticity: "105",
        Cohesivity: "18",
        WaterUptake: "250",
        Ha: "20",
        NeedleSize: "Terumo K-pack II 30G1/2\"",
        ExtrusionForce: "37.1 ",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal Touch Up",
        BrandColor: "#52c9c5",
        Elasticity: "234",
        Cohesivity: "35",
        WaterUptake: "266",
        Ha: "25",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "42.4 ",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal PureSense Deep Lines",
        BrandColor: "#315c5a",
        Elasticity: "301",
        Cohesivity: "82",
        WaterUptake: "300",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "30.1",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal PureSense Ultra Deep",
        BrandColor: "#15c2bc",
        Elasticity: "348",
        Cohesivity: "87",
        WaterUptake: "250",
        Ha: "25",
        NeedleSize: "Terumo 25G1\"",
        ExtrusionForce: "37.6",
        LiftCapacity: [{
            Day: 0,
            Value: "1.69",
          },
          {
            Day: 0.14,
            Value: "1.38",
          },
          {
            Day: 1,
            Value: "1.61",
          },
          {
            Day: 2,
            Value: "1.35",
          },
          {
            Day: 4,
            Value: "1.29",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "1.18",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal PureSense Ultra Deep - 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal PureSense Ultra Deep - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Teosyal Global Action",
        BrandColor: "#a3fdfa",
        Elasticity: "259",
        Cohesivity: "40",
        WaterUptake: "NA",
        Ha: "25",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "40",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal Ultimate",
        BrandColor: "#13837f",
        Elasticity: "349",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "22",
        NeedleSize: "Terumo 23G1\"",
        ExtrusionForce: "38.5",
        LiftCapacity: [{
            Day: 0,
            Value: "1.34",
          },
          {
            Day: 0.14,
            Value: "1.11",
          },
          {
            Day: 1,
            Value: "0.94",
          },
          {
            Day: 2,
            Value: "0.82",
          },
          {
            Day: 4,
            Value: "0.69",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.6",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal ultimate - 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal ultimate - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Teosyal Puresense Redensity I",
        BrandColor: "#07fff7",
        Elasticity: "NA",
        Cohesivity: "NA",
        WaterUptake: "NA",
        Ha: "15",
        NeedleSize: "TSK 32G1/2\"",
        ExtrusionForce: "22.4",
        LiftCapacity: [{
            Day: 0,
            Value: "1.02",
          },
          {
            Day: 0.14,
            Value: "0.28",
          },
          {
            Day: 1,
            Value: "0.15",
          },
          {
            Day: 2,
            Value: "0.16",
          },
          {
            Day: 4,
            Value: "0.19",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.15",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal Puresense Redensity I - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal Puresense Kiss",
        BrandColor: "#a6c2c0",
        Elasticity: "314",
        Cohesivity: "74",
        WaterUptake: "380",
        Ha: "25",
        NeedleSize: "Terumo K-pack II 27G1/2\"",
        ExtrusionForce: "25.8",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal RHA 1",
        BrandColor: "#70d1ce",
        Elasticity: "133",
        Cohesivity: "22",
        WaterUptake: "260",
        Ha: "15",
        NeedleSize: "Terumo 30G1/2\"",
        ExtrusionForce: " 27.8",
        LiftCapacity: [{
            Day: 0,
            Value: "1.31",
          },
          {
            Day: 0.14,
            Value: "1.06",
          },
          {
            Day: 1,
            Value: "1.13",
          },
          {
            Day: 2,
            Value: "1.01",
          },
          {
            Day: 4,
            Value: "0.78",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.6",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 1 - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 1 - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal RHA 2",
        BrandColor: "#00a19c",
        Elasticity: "319",
        Cohesivity: "77",
        WaterUptake: "420",
        Ha: "23",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "35.1",
        LiftCapacity: [{
            Day: 0,
            Value: "1.31",
          },
          {
            Day: 0.14,
            Value: "1.35",
          },
          {
            Day: 1,
            Value: "1.23",
          },
          {
            Day: 2,
            Value: "1.22",
          },
          {
            Day: 4,
            Value: "1.03",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.66",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 2 - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 2 - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal RHA 3",
        BrandColor: "#e3fcfb",
        Elasticity: "264",
        Cohesivity: "109",
        WaterUptake: "427",
        Ha: "23",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "20",
        LiftCapacity: [{
            Day: 0,
            Value: "1.49",
          },
          {
            Day: 0.14,
            Value: "1.36",
          },
          {
            Day: 1,
            Value: "1.3",
          },
          {
            Day: 2,
            Value: "1.09",
          },
          {
            Day: 4,
            Value: "1.19",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.84",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 3 - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 3 - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Teosyal RHA 4",
        BrandColor: "#408381",
        Elasticity: "346",
        Cohesivity: "115",
        WaterUptake: "366",
        Ha: "23",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "16.5",
        LiftCapacity: [{
            Day: 0,
            Value: "1.35",
          },
          {
            Day: 0.14,
            Value: "1.38",
          },
          {
            Day: 1,
            Value: "1.26",
          },
          {
            Day: 2,
            Value: "1.16",
          },
          {
            Day: 4,
            Value: "1.05",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.85",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 4 - 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal RHA 4 - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Teosyal PureSense Redensity II",
        BrandColor: "#a6bdbc",
        Elasticity: "114",
        Cohesivity: "16",
        WaterUptake: "239",
        Ha: "15",
        NeedleSize: "Terumo 30G1/2\"",
        ExtrusionForce: "27.7",
        LiftCapacity: [{
            Day: 0,
            Value: "1.38",
          },
          {
            Day: 0.14,
            Value: "0.95",
          },
          {
            Day: 1,
            Value: "0.99",
          },
          {
            Day: 2,
            Value: "1.02",
          },
          {
            Day: 4,
            Value: "0.75",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.65",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal Puresense Redensity II - 1 week - I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal Puresense Redensity II - 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Teosyal Puresense Redensity II - 4 week -I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Teosyal Puresense Redensity II - 4 week - S.png"
            }
          }
        ],
      },
    ],
  },

  {
    "Maili": [{
        Name: "Maili Precise",
        BrandColor: "#101f35",
        Elasticity: "161",
        Cohesivity: "25",
        WaterUptake: "313",
        Ha: "15",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "36.1",
        LiftCapacity: [{
            Day: 0,
            Value: "1.89",
          },
          {
            Day: 0.14,
            Value: "1.47",
          },
          {
            Day: 1,
            Value: "1.18",
          },
          {
            Day: 2,
            Value: "1.06",
          },
          {
            Day: 4,
            Value: "1.02",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.83",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Maili┬« PRECISE - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Maili┬« PRECISE - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Maili Define",
        BrandColor: "#484c52",
        Elasticity: "229",
        Cohesivity: "39",
        WaterUptake: "306",
        Ha: "18",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "31.4",
        LiftCapacity: [{
            Day: 0,
            Value: "2.09",
          },
          {
            Day: 0.14,
            Value: "1.18",
          },
          {
            Day: 1,
            Value: "1.24",
          },
          {
            Day: 2,
            Value: "1.33",
          },
          {
            Day: 4,
            Value: "1.27",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.84",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Maili┬« DEFINE - 1 week - I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Maili┬« DEFINE - 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Maili┬« DEFINE - 4 week - I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Maili┬« DEFINE - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Maili Volume",
        BrandColor: "#292b2b",
        Elasticity: "284",
        Cohesivity: "84",
        WaterUptake: "389",
        Ha: "21",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "25.6",
        LiftCapacity: [{
            Day: 0,
            Value: "1.85",
          },
          {
            Day: 0.14,
            Value: "1.33",
          },
          {
            Day: 1,
            Value: "1.36",
          },
          {
            Day: 2,
            Value: "1.29",
          },
          {
            Day: 4,
            Value: "1.25",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.85",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Maili┬« VOLUME- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {

              image: "./assets/images/TissueIntegration/Maili┬« VOLUME- 4 week - s.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Maili Extreme",
        BrandColor: "#787a7c",
        Elasticity: "346",
        Cohesivity: "118",
        WaterUptake: "438",
        Ha: "24",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "31.3",
        LiftCapacity: [{
            Day: 0,
            Value: "1.81",
          },
          {
            Day: 0.14,
            Value: "1.19",
          },
          {
            Day: 1,
            Value: "1.52",
          },
          {
            Day: 2,
            Value: "1.32",
          },
          {
            Day: 4,
            Value: "1.42",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "1.03",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Maili┬« EXTREME- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {

              image: "./assets/images/TissueIntegration/Maili┬« EXTREME- 4 week - s.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Stylage: [{
        Name: "Stylage S",
        BrandColor: "#4c52a8",
        Elasticity: "195",
        Cohesivity: "34",
        WaterUptake: "272",
        Ha: "16",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "36.4",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Stylage S - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Stylage M",
        BrandColor: "#2130fd",
        Elasticity: "267",
        Cohesivity: "57",
        WaterUptake: "328",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "38.7",
        LiftCapacity: [{
            Day: 0,
            Value: "1.84",
          },
          {
            Day: 0.14,
            Value: "1.14",
          },
          {
            Day: 1,
            Value: "1.06",
          },
          {
            Day: 2,
            Value: "0.96",
          },
          {
            Day: 4,
            Value: "0.83",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.67",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Stylage M  - 4 week - I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Stylage M  - 4 week -S.png"
            }
          }
        ],
      },
      {
        Name: "Stylage L lidocaine",
        BrandColor: "#636df5",
        Elasticity: "282",
        Cohesivity: "78",
        WaterUptake: "407",
        Ha: "24",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "33.2",
        LiftCapacity: [{
            Day: 0,
            Value: "1.68",
          },
          {
            Day: 0.14,
            Value: "1.08",
          },
          {
            Day: 1,
            Value: "0.94",
          },
          {
            Day: 2,
            Value: "0.87",
          },
          {
            Day: 4,
            Value: "0.85",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.71",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Stylage L lidocaine - 4 week - I.png"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Stylage L lidocaine - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Stylage XL",
        BrandColor: "#7d83dd",
        Elasticity: "378",
        Cohesivity: "96",
        WaterUptake: "419",
        Ha: "26",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "33.1",
        LiftCapacity: [{
            Day: 0,
            Value: "1.7",
          },
          {
            Day: 0.14,
            Value: "1.31",
          },
          {
            Day: 1,
            Value: "0.92",
          },
          {
            Day: 2,
            Value: "0.96",
          },
          {
            Day: 4,
            Value: "0.94",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.77",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Stylage XL  - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Stylage XXL",
        BrandColor: "#2c3070",
        Elasticity: "324",
        Cohesivity: "67",
        WaterUptake: "336",
        Ha: "21",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "52.6",
        LiftCapacity: [{
            Day: 0,
            Value: "1.61",
          },
          {
            Day: 0.14,
            Value: "1.01",
          },
          {
            Day: 1,
            Value: "0.88",
          },
          {
            Day: 2,
            Value: "0.83",
          },
          {
            Day: 4,
            Value: "0.77",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.64",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Stylage XXL  - 4 week - S.png"
            }
          }
        ],
      },
      {
        Name: "Stylage Special Lips lidocaine",
        BrandColor: "#bcbff1",
        Elasticity: "232",
        Cohesivity: "51",
        WaterUptake: "288",
        Ha: "18.5",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "27.6",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Stylage Hydromax",
        BrandColor: "#3a47fa",
        Elasticity: "116",
        Cohesivity: "22",
        WaterUptake: "162",
        Ha: "12.5",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "15.5",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    Neuramis: [{
        Name: "Neuramis Deep",
        BrandColor: "#d3afaf",
        Elasticity: "300",
        Cohesivity: "50",
        WaterUptake: "156",
        Ha: "20",
        NeedleSize: "BD 27G1/2\"",
        ExtrusionForce: "31",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Neuramis Deep lidocaine",
        BrandColor: "#ffdada",
        Elasticity: "232",
        Cohesivity: "41",
        WaterUptake: "<100",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "17",
        LiftCapacity: [{
            Day: 0,
            Value: "1.28",
          },
          {
            Day: 0.14,
            Value: "1.21",
          },
          {
            Day: 1,
            Value: "0.97",
          },
          {
            Day: 2,
            Value: "0.83",
          },
          {
            Day: 4,
            Value: "0.74",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.63",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Neuramis Deep  Lidocaine - 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Neuramis Deep  Lidocaine - 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  {
    PerfectHA: [{
        Name: "PerfectHA Fine Lines",
        BrandColor: "#d68895",
        Elasticity: "417",
        Cohesivity: "48",
        WaterUptake: "240",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "30",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "PerfectHA Derm",
        BrandColor: "#8a646a",
        Elasticity: "529",
        Cohesivity: "53",
        WaterUptake: "180",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "36",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "PerfectHA Deep",
        BrandColor: "#fa5d77",
        Elasticity: "498",
        Cohesivity: "57",
        WaterUptake: "228",
        Ha: "20",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "18",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "PerfectHA Complement",
        BrandColor: "#583238",
        Elasticity: "464",
        Cohesivity: "44",
        WaterUptake: "269",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "31",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Perfect Subskin",
        BrandColor: "#ffc4ce",
        Elasticity: "346",
        Cohesivity: "51",
        WaterUptake: "228",
        Ha: "20",
        NeedleSize: "TSK21G2\"",
        ExtrusionForce: "9",
        LiftCapacity: [{
            Day: 0,
            Value: "NA",
          },
          {
            Day: 0.14,
            Value: "NA",
          },
          {
            Day: 1,
            Value: "NA",
          },
          {
            Day: 2,
            Value: "NA",
          },
          {
            Day: 4,
            Value: "NA",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "NA",
          },
        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
    ],
  },
  // {
  //   Radiesse: [
  //     {
  //       Name: "Radiesse",
  //       BrandColor: "#0B3968",
  //       Elasticity: "2747",
  //       Cohesivity: "212",
  //       WaterUptake: "NA",
  //       Ha: "NA",
  //       NeedleSize: "TSK27G1/2\"",
  //       ExtrusionForce: "19",
  //       LiftCapacity: [
  //         {
  //           Day: 0,
  //           Value: "1.42",
  //         },
  //         {
  //           Day: 0.14,
  //           Value: "1.13",
  //         },
  //         {
  //           Day: 1,
  //           Value: "0.97",
  //         },
  //         {
  //           Day: 2,
  //           Value: "0.93",
  //         },
  //         {
  //           Day: 4,
  //           Value: "0.84",
  //         },
  //         {
  //           Day: 8,
  //           Value: "0.68",
  //         },
  //         {
  //           Day: 12,
  //           Value: "0.62",
  //         },
  //       ],
  //       TissueIntegration: [
  //         {
  //           week: "Week1",
  //           Intradermal: {
  //             image: "./assets/images/TissueIntegration/Radiesse - 1 week - I.png"
  //           },
  //           Subcutaneous: {
  //             image: "./assets/images/TissueIntegration/Radiesse - 1 week - S.png"
  //           }
  //         },
  //         {
  //           week: "Week4",
  //           Intradermal: {
  //             image: "./assets/images/TissueIntegration/Radiesse - 4 week - I.png"
  //           },
  //           Subcutaneous: {
  //             image: "./assets/images/TissueIntegration/Radiesse - 4 week - S.png"
  //           }
  //         }
  //       ],
  //     },
  //   ],
  // },

  {
    Art: [{
        Name: "Art Filler Fine Lines",
        BrandColor: "#D5D3D6",
        Elasticity: "117",
        Cohesivity: "16",
        WaterUptake: "228",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "27",
        LiftCapacity: [{
            Day: 0,
            Value: "1.76",
          },
          {
            Day: 0.14,
            Value: "1.11",
          },
          {
            Day: 1,
            Value: "1.15",
          },
          {
            Day: 2,
            Value: "1.22",
          },
          {
            Day: 4,
            Value: "1.11",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.66",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Fine Lines- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Fine Lines- 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Art Filler Lips",
        BrandColor: "#a2a0a3",
        Elasticity: "277",
        Cohesivity: "37",
        WaterUptake: "362",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "20",
        LiftCapacity: [{
            Day: 0,
            Value: "1.6",
          },
          {
            Day: 0.14,
            Value: "1.06",
          },
          {
            Day: 1,
            Value: "1.37",
          },
          {
            Day: 2,
            Value: "1.14",
          },
          {
            Day: 4,
            Value: "1.31",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.95",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Lips┬á- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Lips┬á- 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Art Filler Universal",
        BrandColor: "#6a676b",
        Elasticity: "241",
        Cohesivity: "54",
        WaterUptake: "355",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "18",
        LiftCapacity: [{
            Day: 0,
            Value: "1.5",
          },
          {
            Day: 0.14,
            Value: "1.17",
          },
          {
            Day: 1,
            Value: "1.09",
          },
          {
            Day: 2,
            Value: "1.15",
          },
          {
            Day: 4,
            Value: "1.09",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.83",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Universal┬á- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Universal┬á- 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Art Filler Volume",
        BrandColor: "#d6cbda",
        Elasticity: "486",
        Cohesivity: "81",
        WaterUptake: "324",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "26",
        LiftCapacity: [{
            Day: 0,
            Value: "1.66",
          },
          {
            Day: 0.14,
            Value: "1.24",
          },
          {
            Day: 1,
            Value: "1.11",
          },
          {
            Day: 2,
            Value: "1.28",
          },
          {
            Day: 4,
            Value: "1.08",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "1.02",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Volume┬á- 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Volume┬á- 4 week - S.png"
            }
          }
        ],
      },
    ],
  },
  {
    Art: [{
        Name: "Art Filler Fine Lines",
        BrandColor: "#D5D3D6",
        Elasticity: "117",
        Cohesivity: "16",
        WaterUptake: "228",
        Ha: "20",
        NeedleSize: "TSK 30G1/2\"",
        ExtrusionForce: "27",
        LiftCapacity: [{
            Day: 0,
            Value: "1.76",
          },
          {
            Day: 0.14,
            Value: "1.11",
          },
          {
            Day: 1,
            Value: "1.15",
          },
          {
            Day: 2,
            Value: "1.22",
          },
          {
            Day: 4,
            Value: "1.11",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.66",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Fine Lines- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Fine Lines- 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Art Filler Lips",
        BrandColor: "#a2a0a3",
        Elasticity: "277",
        Cohesivity: "37",
        WaterUptake: "362",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "20",
        LiftCapacity: [{
            Day: 0,
            Value: "1.6",
          },
          {
            Day: 0.14,
            Value: "1.06",
          },
          {
            Day: 1,
            Value: "1.37",
          },
          {
            Day: 2,
            Value: "1.14",
          },
          {
            Day: 4,
            Value: "1.31",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.95",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Lips┬á- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Lips┬á- 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Art Filler Universal",
        BrandColor: "#6a676b",
        Elasticity: "241",
        Cohesivity: "54",
        WaterUptake: "355",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "18",
        LiftCapacity: [{
            Day: 0,
            Value: "1.5",
          },
          {
            Day: 0.14,
            Value: "1.17",
          },
          {
            Day: 1,
            Value: "1.09",
          },
          {
            Day: 2,
            Value: "1.15",
          },
          {
            Day: 4,
            Value: "1.09",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "0.83",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Universal┬á- 1 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "./assets/images/TissueIntegration/Universal┬á- 4 week - I.png"
            },
            Subcutaneous: {
              image: "NA"
            }
          }
        ],
      },
      {
        Name: "Art Filler Volume",
        BrandColor: "#d6cbda",
        Elasticity: "486",
        Cohesivity: "81",
        WaterUptake: "324",
        Ha: "25",
        NeedleSize: "TSK 27G1/2\"",
        ExtrusionForce: "26",
        LiftCapacity: [{
            Day: 0,
            Value: "1.66",
          },
          {
            Day: 0.14,
            Value: "1.24",
          },
          {
            Day: 1,
            Value: "1.11",
          },
          {
            Day: 2,
            Value: "1.28",
          },
          {
            Day: 4,
            Value: "1.08",
          },
          {
            Day: 8,
            Value: "NA",
          },
          {
            Day: 12,
            Value: "1.02",
          },

        ],
        TissueIntegration: [{
            week: "Week1",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Volume┬á- 1 week - S.png"
            }
          },
          {
            week: "Week4",
            Intradermal: {
              image: "NA"
            },
            Subcutaneous: {
              image: "./assets/images/TissueIntegration/Volume┬á- 4 week - S.png"
            }
          }
        ],
      },
    ],
  },

];


let SavedList = [];
const SAVED_LIST_STORAGE_KEY = "ha-filler-saved-lists";

// json conversion
const seenBrands = new Set();
const brands = data.map((obj) => {
  const brand = Object.keys(obj)[0];
  return {
    brand: brand,
    products: obj[brand], // the array of products for this brand
  };
}).filter(({ brand }) => {
  if (seenBrands.has(brand)) return false;
  seenBrands.add(brand);
  return true;
});

const volbella30Name = 'Juvéderm Volbella with Lidocaine/XC (TSK 30G1/2")';
const volbella32Name = 'Juvéderm Volbella with Lidocaine/XC (TSK 32G1/2")';
const volbellaDisplayName = "Juvéderm Volbella with Lidocaine/XC";

function isVolbellaVariant(product) {
  return product.name === volbella30Name || product.name === volbella32Name;
}

function getProductsWithSingleVolbellaEntry(products) {
  let hasVolbella = false;

  return products.filter((product) => {
    if (!isVolbellaVariant(product)) return true;
    if (hasVolbella) return false;

    hasVolbella = true;
    return true;
  });
}

function getProductPickerEntries(brand) {
  const entries = [];

  brand.products.forEach((product) => {
    if (product.Name === volbella32Name) return;

    entries.push({
      product,
      displayName: product.Name === volbella30Name
        ? "Juvéderm Volbella with Lidocaine/XC"
        : product.Name,
      selectionNames: product.Name === volbella30Name
        ? [volbella30Name, volbella32Name]
        : [product.Name],
    });
  });

  return entries;
}

function getBrandSelectedOptionCount(brand) {
  const brandData = brands.find((item) => item.brand === brand);
  if (!brandData || !state.selected[brand]) return 0;

  return getProductPickerEntries(brandData)
    .filter((entry) => entry.selectionNames.some((name) => state.selected[brand].has(name)))
    .length;
}

// State store
const state = {
  activeBrand: "All",
  selected: {},
  searchTerm: "",
  sortOrder: "asc",
};

// sorting
document.getElementById("brandSort").addEventListener("change", (e) => {
  state.sortOrder = e.target.value;
  renderAll();
});

// searching
document.getElementById("brandSearch").addEventListener("input", (e) => {
  state.searchTerm = e.target.value.trim().toLowerCase();
  const matchingBrands = getMatchingBrands();
  if (state.searchTerm && !matchingBrands.some(({ brand }) => brand === state.activeBrand)) {
    state.activeBrand = matchingBrands[0]?.brand ?? "All";
    if (matchingBrands.length) sectionsDiv.style.display = "block";
    sectionsDiv.scrollTop = 0;
  }
  renderAll(matchingBrands);
});

// initialize selected sets
brands.forEach((b) => {
  state.selected[b.brand] = new Set();
});

function loadSavedLists() {
  let storedLists;
  try {
    const storedValue = localStorage.getItem(SAVED_LIST_STORAGE_KEY);
    if (!storedValue) return [];
    storedLists = JSON.parse(storedValue);
  } catch (error) {
    console.error("Unable to load saved product selections.", error);
    return [];
  }

  if (!Array.isArray(storedLists)) {
    console.error("Saved product selections have an invalid format.");
    return [];
  }

  const seenNames = new Set();
  return storedLists.reduce((lists, list) => {
    if (!list || typeof list.name !== "string" || !list.selection || typeof list.selection !== "object") {
      return lists;
    }

    const name = list.name.trim();
    const normalizedName = name.toLocaleLowerCase();
    if (!name || seenNames.has(normalizedName)) return lists;

    const selection = {};
    brands.forEach((brand) => {
      const products = list.selection[brand.brand];
      if (!Array.isArray(products)) return;

      const validProducts = products.filter((productName) =>
        typeof productName === "string" &&
        brand.products.some((product) => product.Name === productName)
      );
      const normalizedProducts = new Set(validProducts);
      getProductPickerEntries(brand).forEach((entry) => {
        if (entry.selectionNames.some((productName) => normalizedProducts.has(productName))) {
          entry.selectionNames.forEach((productName) => normalizedProducts.add(productName));
        }
      });
      if (normalizedProducts.size > 0) selection[brand.brand] = [...normalizedProducts];
    });

    if (Object.keys(selection).length === 0) return lists;
    seenNames.add(normalizedName);
    lists.push({ name, selection });
    return lists;
  }, []);
}

function persistSavedLists(lists) {
  try {
    localStorage.setItem(SAVED_LIST_STORAGE_KEY, JSON.stringify(lists));
    return true;
  } catch (error) {
    console.error("Unable to save product selections.", error);
    return false;
  }
}

function areSavedSelectionsEqual(first, second) {
  return brands.every(({ brand }) => {
    const firstProducts = [...(first[brand] || [])].sort();
    const secondProducts = [...(second[brand] || [])].sort();
    return JSON.stringify(firstProducts) === JSON.stringify(secondProducts);
  });
}

SavedList = loadSavedLists();

// DOM refs
const filtersDiv = document.getElementById("products");
const sectionsDiv = document.getElementById("brand-sections");
const proceedBtn = document.getElementById("proceedBtn");
const ReferenceBtn = document.getElementById("Referencebtn");
const cofmbtn = document.getElementById("cofmbtn");
const tabButtons = document.querySelectorAll("#fillerTabs .nav-link");

function renderSavedListsDropdown() {
  const menu = document.getElementById("savedListMenu");
  if (!menu) return;

  menu.replaceChildren();
  if (SavedList.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "saved-list-empty";
    emptyMessage.textContent = "No saved lists yet";
    menu.appendChild(emptyMessage);
    return;
  }

  SavedList.forEach((savedList) => {
    const item = document.createElement("div");
    item.className = "saved-list-item";
    item.setAttribute("role", "none");

    const selectButton = document.createElement("button");
    selectButton.type = "button";
    selectButton.className = "saved-list-option";
    selectButton.setAttribute("role", "menuitem");
    selectButton.textContent = savedList.name;
    selectButton.addEventListener("click", () => confirmSavedList(savedList));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "saved-list-delete";
    deleteButton.setAttribute("aria-label", `Delete saved list ${savedList.name}`);
    deleteButton.title = `Delete ${savedList.name}`;
    deleteButton.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 5.5h13M8 5.5V3.75h4V5.5m-6.5 0 .7 11h7.6l.7-11M8.25 8.5v5m3.5-5v5" /></svg>';
    deleteButton.addEventListener("click", () => deleteSavedList(savedList.name));

    item.append(selectButton, deleteButton);
    menu.appendChild(item);
  });
}

function setSavedListDropdownOpen(isOpen) {
  const toggle = document.getElementById("savedListToggle");
  const menu = document.getElementById("savedListMenu");
  if (!toggle || !menu) return;

  menu.hidden = !isOpen;
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function closeSavedListDropdown() {
  setSavedListDropdownOpen(false);
}

const savedListToggle = document.getElementById("savedListToggle");
const savedListDropdown = document.getElementById("savedListDropdown");
if (savedListToggle && savedListDropdown) {
  savedListToggle.addEventListener("click", () => {
    const menu = document.getElementById("savedListMenu");
    setSavedListDropdownOpen(Boolean(menu && menu.hidden));
  });

  document.addEventListener("click", (event) => {
    if (!savedListDropdown.contains(event.target)) closeSavedListDropdown();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSavedListDropdown();
  });
}

function syncSaveSelectionViewport() {
  const modal = document.getElementById("saveSelectionModal");
  const viewport = window.visualViewport;
  if (!viewport || !modal?.classList.contains("open")) return;
  modal.style.setProperty("--save-viewport-top", `${viewport.offsetTop}px`);
  modal.style.setProperty("--save-viewport-height", `${viewport.height}px`);
}

window.visualViewport?.addEventListener("resize", syncSaveSelectionViewport);
window.visualViewport?.addEventListener("scroll", syncSaveSelectionViewport);

function openSaveSelectionModal() {
  const errorMessage = document.getElementById("savedSelectionError");
  const nameInput = document.getElementById("savedSelectionName");
  if (nameInput) nameInput.value = "";

  if (!getTotalSelectedCount()) {
    if (errorMessage) {
      errorMessage.textContent = "Select at least one product before saving.";
      errorMessage.hidden = false;
    }
    openModal("saveSelectionModal");
    syncSaveSelectionViewport();
    return;
  }

  if (errorMessage) {
    errorMessage.textContent = "";
    errorMessage.hidden = true;
  }
  openModal("saveSelectionModal");
  syncSaveSelectionViewport();
  if (nameInput) nameInput.focus({ preventScroll: true });
}

async function saveCurrentSelection(event) {
  event.preventDefault();

  const nameInput = document.getElementById("savedSelectionName");
  const errorMessage = document.getElementById("savedSelectionError");
  if (!nameInput || !errorMessage) return;

  const name = nameInput.value.trim();
  const showError = (message) => {
    errorMessage.textContent = message;
    errorMessage.hidden = false;
    nameInput.focus();
  };

  if (!name) {
    showError("Enter a name for this selection.");
    return;
  }
  if (!getTotalSelectedCount()) {
    showError("Select at least one product before saving.");
    return;
  }
  const selection = {};
  brands.forEach((brand) => {
    if (state.selected[brand.brand].size > 0) {
      selection[brand.brand] = Array.from(state.selected[brand.brand]);
    }
  });

  const existingListByName = SavedList.find(
    (list) => list.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  const existingList = existingListByName || SavedList.find(
    (list) => areSavedSelectionsEqual(list.selection, selection)
  );
  if (existingList) {
    const dialog = document.getElementById("duplicateSavedSelection");
    dialog.style.setProperty("--save-dialog-height", `${event.currentTarget.offsetHeight}px`);
    document.getElementById("duplicateSavedSelectionMessage").textContent = existingListByName
      ? `A list named “${existingList.name}” already exists. Replace it with your current selection?`
      : `These products are already saved as “${existingList.name}”. Replace that list with “${name}”?`;
    dialog.returnValue = "keep";
    const choice = new Promise((resolve) =>
      dialog.addEventListener("close", () => resolve(dialog.returnValue), { once: true })
    );
    dialog.showModal();
    if (await choice !== "replace") return;
  }

  const savedName = existingListByName ? existingList.name : name;
  const updatedLists = existingList
    ? SavedList.map((list) =>
      list === existingList ? { name: savedName, selection } : list
    )
    : [...SavedList, { name, selection }];
  if (!persistSavedLists(updatedLists)) {
    showError("The selection could not be saved. Check browser storage and try again.");
    return;
  }

  SavedList = updatedLists;
  renderSavedListsDropdown();
  closeModal("saveSelectionModal");
}

function confirmSavedList(savedList) {
  const cancel = document.getElementById("cancelSavedListBtn");
  const confirm = document.getElementById("confirmSavedListBtn");
  document.getElementById("confirmSavedListMessage").textContent =
    `Use "${savedList.name}" for comparison? This replaces your current selection.`;
  closeSavedListDropdown();
  cancel.onclick = () => {
    closeModal("confirmSavedListModal");
    savedListToggle.focus();
  };
  confirm.onclick = () => {
    closeModal("confirmSavedListModal");
    loadSavedList(savedList);
    if (!proceedBtn.disabled) continueAction();
    else savedListToggle.focus();
  };
  openModal("confirmSavedListModal");
  cancel.focus();
}

function loadSavedList(savedList) {
  brands.forEach((brand) => {
    state.selected[brand.brand].clear();
    (savedList.selection[brand.brand] || []).forEach((productName) => {
      state.selected[brand.brand].add(productName);
    });
  });
  sectionsDiv.style.display = "block";
  refreshProductSelection();
}

function clearAllProducts() {
  brands.forEach((brand) => state.selected[brand.brand].clear());
  refreshProductSelection();
}

function resetProductSelection() {
  state.activeBrand = "All";
  sectionsDiv.style.display = "none";
  closeSavedListDropdown();
  clearAllProducts();
}

function refreshProductSelection() {
  updateClearAllButton();
  updateSelectedCountDisplay();
  renderAll();
  renderSelectedProducts();
}

function deleteSavedList(name) {
  if (!window.confirm(`Delete the saved list "${name}"?`)) return;

  const updatedLists = SavedList.filter((list) => list.name !== name);
  if (!persistSavedLists(updatedLists)) {
    window.alert("The saved list could not be deleted. Check browser storage and try again.");
    return;
  }

  SavedList = updatedLists;
  renderSavedListsDropdown();
}

function getMatchingBrands() {
  return brands
    .filter(({ brand }) => brand.toLowerCase().includes(state.searchTerm))
    .sort((a, b) => state.sortOrder === "asc"
      ? a.brand.localeCompare(b.brand)
      : b.brand.localeCompare(a.brand));
}

// Render brand filter pills
function renderFilters(matchingBrands) {
  const filtersEl = document.getElementById('products');
  if (!filtersEl) return;
  filtersEl.innerHTML = '';

  if (!matchingBrands.length) {
    const message = document.createElement("p");
    message.className = "brand-search-empty";
    message.setAttribute("role", "status");
    message.textContent = "No matching brands.";
    filtersEl.appendChild(message);
  }

  matchingBrands.forEach(({ brand }) => {
    filtersEl.appendChild(makePill(brand, brand === state.activeBrand));
  });
}

// creating brands
function makePill(name, active = false) {
  const div = document.createElement("div");
  div.className = "pill" + (active ? " active" : "");
  div.style.display = "flex";
  div.style.alignItems = "center";

  // Left container (column for top row + extra)
  const leftDiv = document.createElement("div");
  leftDiv.style.display = "flex";
  leftDiv.style.flexDirection = "column";
  leftDiv.style.gap = "4px";

  // Top row container (Brand name + count side by side)
  const topRow = document.createElement("div");
  topRow.style.display = "flex";
  topRow.style.gap = "8px";
  topRow.style.alignItems = "center";

  // Brand name
  const titleSpan = document.createElement("span");
  titleSpan.innerHTML = name;
  titleSpan.style.fontSize = "22px";
  topRow.appendChild(titleSpan);

  // Counts
  const brandObj = brands.find((b) => b.brand === name);
  if (brandObj) {
    const total = getProductPickerEntries(brandObj).length;
    const selectedCount = getBrandSelectedOptionCount(name);

    const countSpan = document.createElement("span");
    countSpan.textContent = active ? `${selectedCount}/${total}` : `${total}`;
    countSpan.className = active ? "selected-count" : "total-count";
    topRow.appendChild(countSpan);


    const extra = document.createElement("h6");
    extra.style.display = active ? "block" : "none";
    const productLabel = total === 1 ? "product" : "products";
    extra.textContent = active
      ? `${total} ${productLabel} available, ${selectedCount} selected`
      : ``;
    extra.className = "mt-1";

    leftDiv.appendChild(topRow); // top row first
    leftDiv.appendChild(extra); // extra below
  }

  // arrow
  const rightDiv = document.createElement("div");
  rightDiv.style.marginLeft = "auto";
  const inactiveArrow = "<svg width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M1 1.00009L6 8.30444L1 15.0001\"" +
    " stroke=\"#475061\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    </svg>";
  const activeArrow = "<svg width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M1 1.00009L6 8.30444L1 15.0001\"" +
    " stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    </svg>";
  rightDiv.innerHTML = active ? activeArrow : inactiveArrow;
  const arrowImg = document.createElement("span");
  arrowImg.className = active
    ? "inactiveArrow"
    : "activeArrow";
  // arrowImg.style.color = active ? "white" : "black";
  // arrowImg.style.fontSize = "1.8rem";
  rightDiv.appendChild(arrowImg);

  // Append children
  div.appendChild(leftDiv);
  div.appendChild(rightDiv);

  // Click handler
  div.addEventListener("click", () => {
    state.activeBrand = name;
    document.getElementById("brand-sections").style.display = "block";
    renderAll();
  });

  return div;
}

// 5️⃣ Render brand sections & products
function renderSections() {
  const sectionsEl = document.getElementById('brand-sections');
  if (!sectionsEl) return;
  sectionsEl.innerHTML = '';
  brands.forEach((b) => {
    if (b.brand === "All") return;

    const section = document.createElement("div");
    section.className =
      "brand-section " +
      (state.activeBrand !== "All" && state.activeBrand !== b.brand
        ? "hidden"
        : "");

    // HEADER
    const header = document.createElement("div");
    header.className = "brand-header";

    const subhead = document.createElement("div");
    subhead.className = "subhead d-flex align-items-center";
    const title = document.createElement("h3");
    title.innerHTML = (b.brand === "Saypha") ? "Saypha*" : b.brand;
    subhead.append(title);

    // Select all button with icon
    const btn = document.createElement("div");
    const pickerEntries = getProductPickerEntries(b);
    const total = pickerEntries.length;
    const selectedCount = getBrandSelectedOptionCount(b.brand);
    const allSelected = selectedCount === total && total > 0;
    btn.className = `select-all ${allSelected ? "active" : ""}`;

    btn.innerHTML = `Select All`;
    btn.addEventListener("click", () => {
      toggleSelectAll(b.brand);
      renderAll();
    });
    subhead.append(btn);
    header.append(subhead);

    // CLEAR ALL button
    const clearBtn = document.createElement("div");
    clearBtn.className = "clear-all";
    clearBtn.textContent = `Clear (${selectedCount})`;
    clearBtn.style.cursor = "pointer";

    clearBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent affecting section click
      state.selected[b.brand].clear();
      refreshProductSelection();
    });

    subhead.append(clearBtn);

    header.append(subhead);

    // Count on right side
    const count = document.createElement("span");
    header.append(count);
    section.append(header);

    // PRODUCTS GRID
    const grid = document.createElement("div");
    const plusIcon = "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"18\" height=\"18\" rx=\"9\" fill=\"#C5C5C5\" fill-opacity=\"0.3\"/>\n  <path d=\"M2.80273 9.40221V8.5382H8.55288V2.54971H9.44668V8.5382H15.1968V9.40221H9.44668V15.4503H8.55288V9.40221H2.80273Z\" fill=\"#475061\"/>\n</svg>";
    const crossIcon = "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"17.886\" height=\"17.886\" rx=\"8.94301\" fill=\"white\" fill-opacity=\"0.3\"/>\n  <path d=\"M4.84545 13.6094L4.2345 12.9984L8.30046 8.93245L4.06596 4.69795L4.69798 4.06594L8.93248 8.30044L12.9984 4.23448L13.6094 4.84542L9.54343 8.91139L13.8201 13.188L13.188 13.82L8.91141 9.5434L4.84545 13.6094Z\" fill=\"white\"/>\n</svg>";
    grid.className = "products";
    pickerEntries.forEach(({ displayName, selectionNames }) => {
      const isSelected = selectionNames.some((productName) => state.selected[b.brand].has(productName));

      const pill = document.createElement("div");
      pill.className = "pill" + (isSelected ? " selected" : "");
      pill.innerHTML = `<span>${displayName}</span>
    <div class="icon">${isSelected ? crossIcon : plusIcon}</div>`;



      pill.addEventListener("click", () => {
        toggleProductGroup(b.brand, selectionNames);
        renderAll();
      });

      grid.append(pill);
    });

    section.append(grid);

    if (b.brand === "Saypha") {
      const note = document.createElement("div");
      note.className = "brand-note";
      note.style.fontSize = "12px";
      note.style.color = "#0f0f0fff";
      note.style.marginTop = "6px";
      note.textContent = "*Princess products are no longer marketed and have been replaced by Saypha X.";
      section.append(note);
    }


    //    if (b.brand === "Radiesse") {
    //   const note = document.createElement("div");
    //   note.className = "brand-note";
    //   note.style.fontSize = "12px";
    //   note.style.color = "#0f0f0fff";
    //   note.style.marginTop = "6px";
    //   note.textContent = "*Note: Radiesse does not contain HA; it is a CaHA filler with a carboxymethylcellulose carrier.";
    //   section.append(note);
    // }
    sectionsEl.append(section);
  });
  // Enable/Disable proceed button
  const count = getTotalSelectedCount();
  const anySelected = count > 0;
  const overLimit = count > 10;

  // Disable if NO selection OR over limit
  const disableBtn = !anySelected || overLimit;

  const proceedBtn = document.getElementById('proceedBtn');
  if (proceedBtn) {
    proceedBtn.disabled = disableBtn;
    proceedBtn.classList.toggle("btndisable", disableBtn);
    proceedBtn.classList.toggle("btnenabled", !disableBtn);
  }
}

// 6️⃣ Helpers for select/deselect
function toggleProduct(brand, prod) {
  const set = state.selected[brand];
  set.has(prod) ? set.delete(prod) : set.add(prod);

  updateClearAllButton();
  updateSelectedCountDisplay();
}

function toggleProductGroup(brand, productNames) {
  const set = state.selected[brand];
  if (productNames.some((name) => set.has(name))) {
    productNames.forEach((name) => set.delete(name));
  } else {
    productNames.forEach((name) => set.add(name));
  }

  updateClearAllButton();
  updateSelectedCountDisplay();
}

function toggleSelectAll(brand) {
  const set = state.selected[brand];
  const brandObj = brands.find((b) => b.brand === brand);
  if (!brandObj) return;

  const total = brandObj.products.length;

  if (set.size === total) {
    set.clear();
  } else {
    brandObj.products.forEach((p) => {
      set.add(p.Name);
    });
  }
  updateClearAllButton();
  updateSelectedCountDisplay();
  renderSelectedProducts();
}

// 7️⃣ Full re-render
function renderAll(matchingBrands = getMatchingBrands()) {
  if (!matchingBrands.length) sectionsDiv.style.display = "none";
  renderFilters(matchingBrands);
  renderSections();
}
// LiftCapacity graph
let liftChart;

const edgePointFixPlugin = {
  id: 'edgePointFix',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);

      meta.data.forEach(point => {
        if (!point || point.skip) return;

        ctx.save();

        // 👇 Let Chart.js draw the correct shape
        point.draw(ctx);

        ctx.restore();
      });
    });
  }
};



function renderLiftCapacityChart(selectedProducts) {

  if (!selectedProducts || selectedProducts.length === 0) return;
  const pointStyles = ["circle", "rect", "triangle", "rectRot", "rectRounded", "cross", "crossRot"];

  const noteContainer = document.getElementById("liftChartText");
  const productNames = new Set(selectedProducts.map(p => p.name.toLowerCase()));
  console.log("Selected product names for notes:", productNames);
  let notes = [];

  if (productNames.has('profhilo')) {
    notes.push("No visible data available for Profhilo beyond Week 2.");
  }

  if (productNames.has("profhilo structura")) {
    notes.push("No visible data available for Profhilo Structura beyond Day 0.");
  }
  noteContainer.innerHTML = notes.join("<br>");
  // get days (assume all products share the same days)
  const labels = Array.from({ length: 13 }, (_, i) => i);


  // datasets for  selected productsd
  const datasets = getProductsWithSingleVolbellaEntry(selectedProducts).map((prod, index) => {
    const dayMap = {};
    prod.LiftCapacity.forEach(lc => {
      dayMap[lc.Day] = lc.Value === "NA" ? null : parseFloat(lc.Value);
    });
    const values = labels.map(day => dayMap[day] ?? null);

    if (values.every(v => v === null)) {
      return null;
    }

    return {
      label: prod.graphName || prod.name,
      data: prod.LiftCapacity
        .filter(lc => lc.Value !== "NA")
        .map(lc => ({
          x: parseFloat(lc.Day),   // 0.14 will be used here
          y: parseFloat(lc.Value)
        })),
      borderColor: prod.BrandColor, // rotate colors if more products than colors
      backgroundColor: prod.BrandColor,
      pointBackgroundColor: prod.BrandColor,
      pointBorderColor: prod.BrandColor,
      tension: 0,
      spanGaps: true,
      pointRadius: 5,
      pointHoverRadius: 7,
      fill: false,
      pointStyle: pointStyles[index % pointStyles.length],
      padding: 15,
    };
  }).filter(ds => ds !== null);
  // Chart.defaults.elements.point.pointStyle = "circle";

  const ctx1 = document.getElementById("liftChart").getContext("2d");

  // destroy previous chart if exists
  if (liftChart) {
    liftChart.destroy();
    liftChart = null;
  }

  liftChart = new Chart(ctx1, {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive: true,
      interaction: { mode: "nearest", intersect: false },

      scales: {
        x: {
          type: "linear",
          min: 0,
          max: 12,
          bounds: "data",
          ticks: {
            stepSize: 1,   // show only 0,1,2,...12
          },

          title: {
            display: true,

            text: "Time point of evaluation (weeks post-injection)",
            font: {
              size: 16,
              weight: "bold",
            },
          },
          grid: { display: false },
        },

        y: {
          title: {
            display: true,
            text: "Mean height (mm)",
            font: {
              size: 16,
              weight: "bold",
            },
          },
          beginAtZero: true,
          grid: { display: false },
        },
      },
      plugins: {
        datalabels: false,
        tooltip: {
          usePointStyle: true,
        },
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 10,
            generateLabels: function (chart) {
              const datasets = chart.data.datasets;

              return datasets.map((dataset, i) => ({
                text: dataset.label,
                fillStyle: dataset.borderColor,
                strokeStyle: dataset.borderColor,
                lineWidth: 2,

                // 👇 MATCH LEGEND SHAPE WITH DATASET SHAPE
                pointStyle: dataset.pointStyle,

                hidden: !chart.isDatasetVisible(i),
                datasetIndex: i,
              }));
            },
          },
        },
      },
    },
    plugins: [edgePointFixPlugin]
  });

  console.log("Selected Products for Lift Chart:", selectedProducts);
}

Chart.register(ChartDataLabels);


// ExtrusionForce graph



let ExtrusionChart;

function renderExtrusionChart(selectedProducts) {
  if (!selectedProducts || selectedProducts.length === 0) return;

  console.log(selectedProducts);

  const validProducts = selectedProducts.filter(p =>
    p.ExtrusionForce !== "NA" && p.ExtrusionForce !== "" && !isNaN(p.ExtrusionForce)
  );

  // Now build arrays
  const labels = validProducts.map(prod => prod.name);
  const extrusionForces = validProducts.map(prod => parseFloat(prod.ExtrusionForce));
  const barColors = validProducts.map(p => p.BrandColor || "#000000");



  const ctx1 = document.getElementById("ExtrusionChart").getContext("2d");

  if (ExtrusionChart) ExtrusionChart.destroy();

  ExtrusionChart = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: labels, //  product names on x-axis
      datasets: [
        {
          label: "Extrusion Force",
          data: extrusionForces,
          backgroundColor: barColors,
          borderRadius: 15,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      animations: {
        y: {
          from: (ctx) => {
            if (ctx.type === 'data') {
              return ctx.chart.scales.y.getPixelForValue(0);
            }
          }
        },
        base: {
          from: (ctx) => {
            return ctx.chart.scales.y.getPixelForValue(0);
          }
        }
      },

      interaction: { mode: "nearest", intersect: false },
      scales: {
        x: {
          grid: { display: false },

        },
        y: {
          beginAtZero: true,

          min: 0,
          max: 100,
          title: {
            display: true,
            text: "Extrusion Force (N) at 50 mm/min",
            font: { size: 10, weight: "bold" },
          },
          ticks: { stepSize: 10 },
          grid: { display: false },
        },
      },
      plugins: {

        datalabels: {
          backgroundColor: '#0000004D',
          borderRadius: 3,
          anchor: 'end',      // position inside the bar
          align: 'end',
          color: '#000',
          backgroundColor: null,
          borderRadius: 0,
          offset: 5,

          font: function (context) {
            const chartWidth = context.chart.width;
            return {
              weight: 'bold',
              size: Math.max(10, Math.round(chartWidth / 50)) // dynamic font size
            };
          },
          formatter: function (value) {
            return value;
          },
        },
        legend: {
          position: "bottom",
          align: "middle",
          labels: {
            generateLabels: function (chart) {
              // custom legend showing each product name with its bar color
              const data = chart.data;
              if (data.datasets.length) {
                return data.labels.map((label, i) => ({
                  text: label,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].backgroundColor[i],
                  lineWidth: 2,
                  hidden: false,
                  index: i,
                }));
              }
              return [];
            },
            boxWidth: 12,
            boxHeight: 12,
            padding: 10,
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  console.log("Selected Products for extrusionforce Chart:", selectedProducts);
}

//Tissue Integration 
let activeWeek = "Week1";
let activeLayer = "All";

function getColorByIndex(i) {
  const palette = ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"];
  return palette[i % palette.length];
}
let index = 0;
function renderTissueIntefration(selectedProducts) {

  const container = document.getElementById("tissueImageContainer");
  container.innerHTML = "";

  getProductsWithSingleVolbellaEntry(selectedProducts).forEach(product => {

    // Find the week data
    const weekData = product.TissueIntegration.find(w => w.week === activeWeek);
    if (!weekData) return;

    // Build card list based on filter
    const typesToShow = activeLayer === "All"
      ? ["Intradermal", "Subcutaneous"]
      : [activeLayer];

    typesToShow.forEach(type => {
      const imgData = weekData[type];
      if (!imgData ||
        !imgData.image ||
        imgData.image === "NA" ||
        imgData.image === "NA" ||
        imgData.image.trim() === "") return;
      const color = product.BrandColor;

      // CARD HTML
      const card = `
                <div class="tissue-card">
        <span class="tag">${type}</span>
        <img src="${imgData.image}" />

        <div class="tissue-name">
            <span class="tissue-dot" style="background:${color}"></span>
            ${product.graphName || product.name}
        </div>
    </div>
            `;

      container.innerHTML += card;
    });
  });
}

function setActiveButton(groupSelector, clickedButton) {
  document.querySelectorAll(groupSelector).forEach(btn => btn.classList.remove("active"));
  clickedButton.classList.add("active");
}

document.getElementById("week1").addEventListener("click", (e) => {
  activeWeek = "Week1";
  setActiveButton(".tissuebuttons button", e.target);
  renderTissueIntefration(selectedProducts);
});

document.getElementById("week4").addEventListener("click", (e) => {
  activeWeek = "Week4";
  setActiveButton(".tissuebuttons button", e.target);
  renderTissueIntefration(selectedProducts);
});

document.getElementById("Allbtn").addEventListener("click", (e) => {
  activeLayer = "All";
  setActiveButton(".tissuebtncard button", e.target);
  renderTissueIntefration(selectedProducts);
});

document.getElementById("Intradermalbtn").addEventListener("click", (e) => {
  activeLayer = "Intradermal";
  setActiveButton(".tissuebtncard button", e.target);
  renderTissueIntefration(selectedProducts);
});

document.getElementById("Subcutaneousbtn").addEventListener("click", (e) => {
  activeLayer = "Subcutaneous";
  setActiveButton(".tissuebtncard button", e.target);
  renderTissueIntefration(selectedProducts);
});




let ctx = null;

// Chart.register({
//     id: "customLabels",

//     afterDatasetsDraw(chart, args, pluginOptions) {
//         if (!pluginOptions) return;

//         const ctx = chart.ctx;

//         chart.data.datasets.forEach((ds, dsIndex) => {
//             const meta = chart.getDatasetMeta(dsIndex);

//             meta.data.forEach((point, i) => {
//                 const item = ds.data[i];
//                 if (!item || !item.label) return;

//                 // pixel position of point
//                 const { x, y } = point.tooltipPosition();

//                 // label text
//                 const label = item.label;

//                 // label position (you can tweak values)
//                 const labelX = x + 12;
//                 const labelY = y - 10;

//                 // Draw line from point → label
//                 ctx.beginPath();
//                 ctx.strokeStyle = "rgba(120,120,120,0.8)";
//                 ctx.lineWidth = 1;
//                 ctx.moveTo(x, y);
//                 ctx.lineTo(labelX, labelY);
//                 ctx.stroke();

//                 // Draw label
//                 ctx.font = "12px Arial";
//                 ctx.fillStyle = "#333";
//                 ctx.textBaseline = "middle";
//                 ctx.textAlign = "left";
//                 ctx.fillText(label, labelX + 4, labelY);
//             });
//         });
//     }
// });


// proceedBtn click handled by onProceed() in app.js






function closePopup() {
  // Close the confirmation popup in new app
  const popupEl = document.getElementById('confirmPopup');
  if (popupEl) popupEl.classList.remove('open');
}


//   afterDraw(chart) {
//     const { ctx, scales } = chart;

//     // Draw image for X-axis
//     const xAxis = scales.x;
//     if (xAxis && elasticityImg.complete) {
//       const x = chart.chartArea.left + (chart.chartArea.width / 2) + 60;
//       const y = xAxis.bottom + 30;
//       ctx.drawImage(elasticityImg, x, y, 20, 20);
//     }

//     // Draw image for Y-axis
//     const yAxis = scales.y;
//     if (yAxis && cohesivityImg.complete) {
//       const x = yAxis.left - 40;
//       const y = chart.chartArea.top + (chart.chartArea.height / 2) - 10;
//       ctx.drawImage(cohesivityImg, x, y, 20, 20);
//     }
//   }
// };
// Chart.register(axisImagePlugin);

function renderChartsForSelected() {
  document.body.style.overflow = "";

  // tabButtons handled by new nav system

  // exitFullscreen not in new HTML
  // fullscreenBtn visibility handled by app.js
  // document.querySelector(".editoption").style.width = "8%";


  // 1️⃣ Build selectedData
  let selectedData = {}; // reset it
  for (const brand in state.selected) {
    if (state.selected[brand].size > 0) {
      selectedData[brand] = Array.from(state.selected[brand]);
      document.documentElement.style.overflow = "";
    }
  }



  // 2️⃣ Build selectedProducts as full objects
  selectedProducts = [];
  const colors = [
    "#83628C",
    "#375A56",
    "#002060",
    "#A56353",
    "#8A3150",
    "#607BC8",
    "#4B4C4E",
    "#0042C8",
    "#8D8585",
    "#C76083"
  ];
  let colorIndex = 0;
  for (const brand in selectedData) {
    const productNames = selectedData[brand];
    const brandObj = brands.find((b) => b.brand === brand);

    if (brandObj) {
      brandObj.products.forEach((p) => {
        if (productNames.includes(p.Name)) {
          selectedProducts.push({
            brand,
            name: normalizeLabel(p.Name),
            graphName: isVolbellaVariant({ name: normalizeLabel(p.Name) })
              ? volbellaDisplayName
              : normalizeLabel(p.Name),
            x: p.Elasticity,
            y: p.Cohesivity,
            waterupTake: p.WaterUptake,
            HA: p.Ha,
            NeedleSize: p.NeedleSize,
            ExtrusionForce: p.ExtrusionForce,
            LiftCapacity: p["LiftCapacity"],
            TissueIntegration: p["TissueIntegration"],
            BrandColor: colors[colorIndex % colors.length]
          });
          colorIndex++;
        }
      });
    }
  }

  // 3️⃣ Switch to graph view
  // Section navigation handled by app.js continueAction

  // Default to Graph View
  currentView = "graph";
  document.getElementById("scattergraphContainer").style.display = "block";
  document.getElementById("tableContainer").style.display = "none";

  // Toggle active class
  document.getElementById("showGraph").classList.add("active");
  document.getElementById("showTable").classList.remove("active");

  console.log("Selected Products:", selectedData);

  // 4️⃣ Build the table
  const tbody = document.getElementById("fillerTableBody");
  tbody.innerHTML = "";
  selectedProducts.forEach((p) => {
    let row = `
      <tr>
        <td>${p.name}</td>
        
         <td>${p.HA}</td>  
         <td>${p.NeedleSize}
        <td>${p.x}</td>  
        <td>${p.y}</td>  
         <td>${p.waterupTake}</td>  
          <td>${p.ExtrusionForce}</td>  
      </tr>`;
    if (p.name.trim() === 'Juvéderm Volbella') {
      row += `
          <tr class="extra-row">
            <td>${p.name}</td>
         <td>${p.HA}</td>  
         <td>TSK 32G1/2"</td>
        <td>${p.x}</td>  
        <td>${p.y}</td>  
         <td>${p.waterupTake}</td>  
          <td>28</td>  
          </tr>
        `;
    }
    tbody.innerHTML += row;
  });
  console.log("Selected Products going to table:", selectedProducts);

  if (ctx) {
    ctx.destroy();
  }

  function getNiceStep(min, max, maxTicks = 8) {
    const range = max - min;

    if (range <= 0 || !isFinite(range)) return 1;

    const roughStep = range / maxTicks;

    // 🔥 Handle very small ranges safely
    if (roughStep < 1) {
      return parseFloat(roughStep.toFixed(2));
    }

    const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
    const residual = roughStep / magnitude;

    let niceResidual;
    if (residual >= 5) niceResidual = 10;
    else if (residual >= 2) niceResidual = 5;
    else if (residual >= 1) niceResidual = 2;
    else niceResidual = 1;

    return niceResidual * magnitude;
  }

  // Filter out products with invalid x or y values
  const validProducts = getProductsWithSingleVolbellaEntry(selectedProducts).filter(p => {
    const xNum = Number(p.x);
    const yNum = Number(p.y);
    // Filter out products with "NA" string values or NaN results
    return !isNaN(xNum) && !isNaN(yNum) && xNum !== null && yNum !== null;
  });
  if (validProducts.length === 0) {

  }

  const xValues = validProducts.map((p) => Number(p.x));
  const yValues = validProducts.map((p) => Number(p.y));

  console.log("X Values:", xValues);
  console.log("Y Values:", yValues);

  let xMin = Math.min(...xValues);
  let xMax = Math.max(...xValues);

  console.log("Before padding - xMin:", xMin, "xMax:", xMax);

  // Smart padding calculation - smaller percentage for large ranges
  function calculateSmartPadding(min, max) {
    const range = max - min;
    if (range === 0) {
      return 1;
    }
    // Use adaptive padding: 15% for small ranges, decreasing to 5% for large ranges
    const paddingPercent = range < 100 ? 0.15 : range < 500 ? 0.10 : 0.05;
    return range * paddingPercent;
  }

  // These checks should never be true now since we filtered valid products
  if (isNaN(xMin) || isNaN(xMax)) {
    return;
  }

  if (xMin === xMax) {
    const pad = Math.abs(xMin) * 0.2 || 5;
    xMin = xMin - pad;
    xMax = xMax + pad;
  } else {
    const xPad = calculateSmartPadding(xMin, xMax);
    xMin = xMin - xPad;
    xMax = xMax + xPad;
  }

  const xStep = getNiceStep(xMin, xMax);

  // Round max values to nearest step
  xMax = Math.ceil(xMax / xStep) * xStep;

  // X axis starts at 0
  xMin = 0;

  // Y axis is fixed: always 0–180 with step 20
  const yMin = 0;
  const yMax = 180;
  const yStep = 20;



  function normalizeLabel(htmlLabel) {
    return htmlLabel
      .replace(/<sup>®<\/sup>/g, "⁽ᴿ⁾")
      .replace(/<sup>(.*?)<\/sup>/g, "^$1");
  }



  const shapes = [
    'circle',
    'triangle',
    'rect',
    'rectRot',
    'cross',
    'star',
    'rectRounded'
  ];



  ctx = new Chart(document.getElementById("myChart"), {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Products",
          data: (() => {
            // Proximity-based clustering
            const clusters = [];
            const xRange = xMax - xMin || 1;
            const yRange = yMax - yMin || 1;
            const threshold = 0.10; // Increased to 10% to catch near-identical points

            validProducts.forEach(p => {
              let foundCluster = clusters.find(c => {
                // Average positions in cluster for comparison
                const avgX = c.reduce((sum, item) => sum + Number(item.x), 0) / c.length;
                const avgY = c.reduce((sum, item) => sum + Number(item.y), 0) / c.length;
                const dx = Math.abs(Number(p.x) - avgX) / xRange;
                const dy = Math.abs(Number(p.y) - avgY) / yRange;
                return Math.sqrt(dx * dx + dy * dy) < threshold;
              });

              if (foundCluster) {
                foundCluster.push(p);
              } else {
                clusters.push([p]);
              }
            });

            return validProducts.map((p, i) => {
              const cluster = clusters.find(c => c.includes(p));
              const clusterIndex = cluster.indexOf(p);
              const clusterSize = cluster.length;

              // Normalized positions (0.0 to 1.0)
              const nx = (p.x - xMin) / xRange;
              const ny = (p.y - yMin) / yRange;
              const margin = 0.12; // 12% margin for edge detection

              // Calculate Safe Sector (arc) to avoid boundaries
              let minA = 0, maxA = 360;
              const isLeft = nx < margin;
              const isRight = nx > (1 - margin);
              const isBottom = ny < margin;
              const isTop = ny > (1 - margin);

              // Constrain angles based on nearby edges
              if (isLeft) { minA = -90; maxA = 90; }
              else if (isRight) { minA = 90; maxA = 270; }

              if (isBottom) {
                const bMin = 270, bMax = 450; // pointing up
                if (maxA <= 360) {
                  // Intersect with existing constraints
                  minA = Math.max(minA, 270);
                  maxA = Math.min(maxA, 450);
                  if (minA > maxA) { minA = 270; maxA = 360; } // Fallback for corner safety
                } else {
                  minA = 270; maxA = 450;
                }
              } else if (isTop) {
                const tMin = 90, tMax = 270; // pointing down
                if (minA === 0 && maxA === 360) {
                  minA = 90; maxA = 270;
                } else {
                  minA = Math.max(minA, 90);
                  maxA = Math.min(maxA, 270);
                }
              }

              // Base offsets and rings
              let baseOffset = 55;
              let ringSize = clusterSize;
              let ringIndex = clusterIndex;

              if (clusterSize > 4) {
                const ringNum = Math.floor(clusterIndex / 4);
                baseOffset += ringNum * 35;
                ringSize = (ringNum < Math.floor((clusterSize - 1) / 4)) ? 4 : (clusterSize % 4 || 4);
                ringIndex = clusterIndex % 4;
              }

              // Final angle distribution within the safe span
              let finalAngle;
              const span = maxA - minA;
              if (span >= 360) {
                finalAngle = (360 / ringSize) * ringIndex - 45;
              } else {
                const buffer = 10;
                if (ringSize === 1) {
                  finalAngle = minA + span / 2;
                } else {
                  finalAngle = (minA + buffer) + ((span - 2 * buffer) / (ringSize - 1)) * ringIndex;
                }
              }

              // DETERMINISTIC JITTER: Ensure different points (even in different clusters)
              // don't pick the exact same angle if they are near each other.
              finalAngle += (i % 5) * 2 - 4; // Add a small unique shift -4 to +4 degrees

              // Dynamic offset reduction for points extremely close to edges
              const distToEdge = Math.min(nx, 1 - nx, ny, 1 - ny);
              let finalOffset = baseOffset;
              if (distToEdge < 0.05) {
                finalOffset = Math.max(30, baseOffset - (0.05 - distToEdge) * 500);
              }

              return {
                x: p.x,
                y: p.y,
                label: p.graphName,
                BrandColor: p.BrandColor,
                pointStyle: shapes[i % shapes.length],
                groupAngle: finalAngle,
                groupOffset: finalOffset
              };
            });
          })(),
          backgroundColor: validProducts.map(p => p.BrandColor),
          borderColor: validProducts.map(p => p.BrandColor),
          borderWidth: 2,
          pointStyle: validProducts.map((_, i) => shapes[i % shapes.length]),
          pointRadius: 6
        }
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'nearest',
        intersect: false
      },
      plugins: {
        legend: {
          position: "bottom",
          align: "center",
          labels: {
            usePointStyle: true,
            generateLabels: function (chart) {
              const dataset = chart.data.datasets[0];
              return dataset.data.map((item, i) => ({
                text: item.label,
                fillStyle: item.BrandColor,
                strokeStyle: item.BrandColor,
                pointStyle: item.pointStyle,
                lineWidth: 2,
                hidden: false,
                index: i
              }));
            },
            boxWidth: 12,
            boxHeight: 12,
            padding: 10
          }
        },
        datalabels: {
          align: function (context) {
            const dataItem = context.dataset.data[context.dataIndex];
            return dataItem.groupAngle;
          },
          anchor: 'center',
          offset: function (context) {
            const dataItem = context.dataset.data[context.dataIndex];
            return dataItem.groupOffset || 50;
          },
          font: { size: 10, weight: 'bold' },
          formatter: (value) => normalizeLabel(value.label),
          clip: false,
          clamp: true,
          color: function (context) {
            const dataItem = context.dataset.data[context.dataIndex];
            return dataItem.BrandColor;
          }
        },
        tooltip: {
          enabled: true,
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          usePointStyle: true, // Show the point shape in tooltip
          callbacks: {
            label: (ctx) =>
              `${normalizeLabel(ctx.raw.label)} (Elasticity:${ctx.raw.x}, Cohesivity:${ctx.raw.y})`,
          },
        },
      },
      scales: {
        x: {
          min: 0,
          max: 1100,
          title: { display: true, text: "Elasticity (G' Pa)", font: { size: 13, weight: 'bold' } },
          grid: { display: true, drawBorder: true, color: 'rgba(200, 200, 200, 0.2)' },
          ticks: {
            stepSize: 100,
            padding: 15,
            font: { size: 15 },
            callback: function (value) {
              return Math.round(value);
            }
          }
        },
        y: {
          min: 0,
          max: yMax,
          title: { display: true, text: "Cohesivity (gmf)", font: { size: 13, weight: 'bold' } },
          grid: { display: true, drawBorder: true, color: 'rgba(200, 200, 200, 0.2)' },
          ticks: {
            stepSize: yStep,
            padding: 15,
            font: { size: 15 },
            callback: function (value) {
              return Math.round(value);
            }
          }
        },
      },
    },
    plugins: [ChartDataLabels, {
      id: 'lineConnector',
      afterDatasetsDraw(chart) {
        const { ctx } = chart;
        const dataset = chart.data.datasets[0];
        const meta = chart.getDatasetMeta(0);

        ctx.save();
        // Darker line
        ctx.lineWidth = 1.5; // Thicker line
        // Solid line (no dash)

        meta.data.forEach((point, i) => {
          const dataItem = dataset.data[i];
          if (!dataItem) return;
          ctx.strokeStyle = dataItem.BrandColor;
          const x = point.x;
          const y = point.y;

          const angle = (dataItem.groupAngle || 0) * (Math.PI / 180);
          const labelOffset = dataItem.groupOffset || 50;
          const lineOffset = labelOffset - 1; // End search at label edge

          const lineEndX = x + Math.cos(angle) * lineOffset;
          const lineEndY = y + Math.sin(angle) * lineOffset;

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(lineEndX, lineEndY);
          ctx.stroke();
        });
        ctx.restore();
      }
    }],
  });

  // Filler tab nav is handled via switchFillerTab() in index.html




  renderLiftCapacityChart(selectedProducts);

  renderTissueIntefration(selectedProducts);


  renderExtrusionChart(selectedProducts);

  console.log("Selected Products for Graph:", selectedProducts);
}

// initialize selected sets
// brands.forEach((b) => {
//   state.selected[b.brand] = new Set();
// });

// 8️⃣ render all
let selectedProducts = [];
renderAll();
renderSavedListsDropdown();
let chartInstance = null;
let currentView = "graph"; // track current view for fullscreen

// Expand/collapse products bar
// Products bar toggle handled by toggleProductsBar() in app.js

function renderTable() {
  const tbody = document.getElementById("fillerTableBody");
  tbody.innerHTML = "";
  brands
    .filter((p) => selectedProducts.includes(p.name))
    .forEach((p) => {
      const row = `<tr>
                <td>${p.name}</td>
                <td>${p.brand}</td>
                <td>${p.elasticity}</td>
                <td>${p.cohesivity}</td>
            </tr>`;
      tbody.innerHTML += row;
    });
}

// Graph/Table toggle handled by switchGraphTable() in app.js

// showTableBtn click handled by switchGraphTable() in app.js

// Fullscreen handled by openFullscreen/closeFullscreen() in app.js

function renderSelectedProducts() {
  const list = document.getElementById("selectedProductsList");
  list.innerHTML = ""; // Clear previous

  brands.forEach((b) => {
    if (b.brand != "All") {
      const section = document.createElement("div");
      section.className = "brand-section";
      // HEADER
      const header = document.createElement("div");
      header.className = "brand-header";

      const subhead = document.createElement("div");
      subhead.className = "subhead d-flex align-items-center";
      const title = document.createElement("h3");
      title.innerHTML = b.brand;
      subhead.append(title);
      header.append(subhead);
      section.append(header);

      // PRODUCTS GRID
      const grid = document.createElement("div");
      grid.className = "products";
      getProductPickerEntries(b).forEach(({ displayName, selectionNames }) => {
        const pill = document.createElement("div");
        const isSelected = selectionNames.some((productName) => state.selected[b.brand].has(productName));
        pill.className = "pill" + (isSelected ? " selected" : "");
        pill.innerHTML = `<span>${displayName}</span>
        <i class="fa-solid ${isSelected ? "fa-xmark" : "fa-plus"}"></i>        
      `;

        pill.addEventListener("click", () => {
          toggleProductGroup(b.brand, selectionNames);
          renderSelectedProducts();
        });
        grid.append(pill);
      });

      section.append(grid);
      list.append(section);
    }
  });
  const anySelected = Object.values(state.selected).some((set) => set.size > 0);
  document.getElementById('cofmbtn').disabled = !anySelected;
  document.getElementById('cofmbtn').classList.toggle("btndisable", !anySelected);
  document.getElementById('cofmbtn').classList.toggle("btnenabled", anySelected);
  // renderGraph();
  renderTable();
}

(document.getElementById('cofmbtn') || { addEventListener: () => { } }).addEventListener("click", () => {
  for (const brand in state.selected) {
    if (state.selected[brand].size > 0) {
      selectedData[brand] = Array.from(state.selected[brand]);
    }
  }

  // Default to Graph View
  currentView = "graph";
  document.getElementById("scattergraphContainer").style.display = "block";
  document.getElementById("tableContainer").style.display = "none";

  // Toggle active class
  document.getElementById("showGraph").classList.add("active");
  document.getElementById("showTable").classList.remove("active");

  console.log("Selected Products:", selectedData);

  // Prepare selected product names
  selectedProducts = [];
  for (const arr of Object.values(selectedData)) {
    selectedProducts = selectedProducts.concat(arr);
  }
  // renderGraph();

  const productsBar = document.getElementById("productsBar");

  if (productsBar) {
    if (productsBar.classList.contains("open")) {
      productsBar.classList.remove("open"); // remove if already open
    } else {
      productsBar.classList.add("open"); // add if not open
    }
  }
  renderTable();
});

function getTotalSelectedCount() {
  return brands.reduce((sum, brand) => sum + getBrandSelectedOptionCount(brand.brand), 0);
}

function updateClearAllButton() {
  const total = getTotalSelectedCount();
  const btn = document.getElementById('clearAllBtn');
  if (!btn) return;
  btn.style.display = total === 0 ? 'none' : 'block';
  btn.textContent = `Clear All (${total})`;
}

function updateSelectedCountDisplay() {
  const countEl = document.getElementById('selectCount');
  if (countEl) countEl.textContent = getTotalSelectedCount();
}

const brandCountEl = document.getElementById('brandCount');
if (brandCountEl) brandCountEl.textContent = brands.length;

const totalProducts = brands.reduce((acc, b) => acc + getProductPickerEntries(b).length, 0);
const productCountEl = document.getElementById('productCount');
if (productCountEl) productCountEl.textContent = totalProducts;

// clearAllBtn click handled by onclick in index.html

// Old tab system removed - handled by switchTab() in index.html



// filler image section 

function syncFaceMarkerSize() {
  const overlay = document.querySelector(".face-markers");
  const marker = overlay && overlay.querySelector(".face-marker.is-visible");
  if (!overlay || !marker) return;

  const overlayBounds = overlay.getBoundingClientRect();
  if (!overlayBounds.width || !overlayBounds.height) return;

  const screenMatrix = overlay.getScreenCTM();
  if (!screenMatrix || !screenMatrix.a) return;

  const x = Number(marker.dataset.imageX);
  const y = Number(marker.dataset.imageY);
  marker.setAttribute("transform", `translate(${x} ${y}) scale(${1 / screenMatrix.a})`);
}

const faceMarkerOverlay = document.querySelector(".face-markers");
const faceMarkerResizeObserver = "ResizeObserver" in window
  ? new ResizeObserver(syncFaceMarkerSize)
  : null;
if (faceMarkerOverlay) {
  syncFaceMarkerSize();
  if (faceMarkerResizeObserver) {
    faceMarkerResizeObserver.observe(faceMarkerOverlay);
  } else {
    window.addEventListener("resize", syncFaceMarkerSize);
  }
}

const marker_images = [
  {
    id: 1,
    name: "forehead",
    image: "./assets/images/Rheologic considerations for filler/image-markers/forehead.png",
    x: 550,
    y: 502,
  },

  {
    id: 2,
    name: "glabella",
    image: "./assets/images/Rheologic considerations for filler/image-markers/temporal.png",
   x: 851,
     y: 606,
  },
  {
    id: 3,
    name: "temple",
    image: "./assets/images/Rheologic considerations for filler/image-markers/midface.png",
    x: 705,
    y: 983,
  },
  {
    id: 4,
    name: "tear_trough",
    image: "./assets/images/Rheologic considerations for filler/image-markers/infraorbital.png",
    x: 685,
    y: 905,
  },
  {
    id: 5,
    name: "cheek",
    image: "./assets/images/Rheologic considerations for filler/image-markers/nasolabial.png",
    x:  638,
    y: 1154,
  },
  {
    id: 6,
    name: "nasolabial_fold",
    image: "./assets/images/Rheologic considerations for filler/image-markers/lips.png",
    x: 459,
    y: 1279,
  },
  {
    id: 7,
    name: "marionette_lines",
    image: "./assets/images/Rheologic considerations for filler/image-markers/jawline.png",
    x: 497,
    y: 1468,
  },
  {
    id: 8,
    name: "jawline",
    image: "./assets/images/Rheologic considerations for filler/image-markers/skin.png",
    x: 868,
    y: 984,
  },
]

function setFaceMarkerPosition(marker) {
  const faceMarker = document.querySelector(".face-marker.is-visible");
  if (!faceMarker || !marker) return;

  faceMarker.dataset.imageX = String(marker.x);
  faceMarker.dataset.imageY = String(marker.y);
  syncFaceMarkerSize();
}


document.querySelectorAll('.bodypartcontainer').forEach(part => {
  part.addEventListener('click', function () {
    const newImg = Number(this.getAttribute('data-img'));
    const marker_image = marker_images.find(item => item.id === newImg);
    if (!marker_image) return;

    setFaceMarkerPosition(marker_image);
    const image_holder = document.getElementById('image_marker');
    if (!image_holder) return;

    // Hide during swap to prevent flash of wrong position
    image_holder.style.visibility = 'hidden';
    image_holder.style.transition = 'none';

    image_holder.onload = function () {
      image_holder.style.visibility = 'visible';
      image_holder.style.transition = 'all 0.3s ease-in-out';
    };

    image_holder.src = marker_image.image;

    document.querySelectorAll('.bodypartcontainer').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.bodypartcontainer').forEach(p => {
      p.setAttribute('aria-pressed', String(p === this));
    });

    const regionName = this.querySelector('p')?.textContent.trim();
    const faceMarker = document.querySelector('.face-marker.is-visible');
    if (faceMarker && regionName) faceMarker.setAttribute('aria-label', `Show details for ${regionName}`);

    const regionPreview = document.getElementById('mobile-region-preview');
    const regionImage = document.getElementById('mobile-region-image');
    if (regionPreview && regionImage && regionName) {
      regionImage.src = marker_image.image;
      regionImage.alt = `Description for ${regionName}`;
      regionPreview.hidden = false;
    }
  });
});

const faceMarkerButton = document.querySelector('.face-marker.is-visible');
if (faceMarkerButton) {
  faceMarkerButton.addEventListener('click', () => {
    const selectedPart = document.querySelector('.bodypartcontainer.active');
    if (selectedPart) selectedPart.click();
  });
  faceMarkerButton.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    faceMarkerButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}


/* ============================================================
   RESIZE → RELOAD
   Any window resize (minimize, restore, move to another screen)
   triggers a reload once the user stops resizing (300ms debounce).
   This ensures marker positions, charts, and vh-based layouts
   all recalculate correctly for the new screen size.

   NOTE: We only reload on WIDTH changes. On iPad/iOS Safari,
   scrolling causes the browser chrome (address bar) to
   hide/show, which fires a height-only resize event. Reloading
   on that was causing the page to refresh on every scroll-up.
   ============================================================ */
// (function () {
//   var resizeTimer;
//   var lastWidth = window.innerWidth;

//   window.addEventListener('resize', function () {
//     var currentWidth = window.innerWidth;
//     if (currentWidth === lastWidth) return; // height-only change (iOS chrome) — ignore
//     lastWidth = currentWidth;
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function () {
//       window.location.reload();
//     }, 300);
//   });
// }());

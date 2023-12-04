import {GridSettingsConfigMap} from "./types";

export const GridCosts: GridSettingsConfigMap = {
    "aenett": {
        id: "aenett",
        description: "Agder Energi Nett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 135,
            gridCapacity2_5: 170,
            gridCapacity5_10: 290,
            gridCapacity10_15: 600,
            gridCapacity15_20: 780,
            gridCapacity20_25: 980,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.3865,
            gridEnergyNight: 0.2665,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "bkk": {
        id: "bkk",
        description: "BKK Nett AS",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 125,
            gridCapacity2_5: 206,
            gridCapacity5_10: 350,
            gridCapacity10_15: 494,
            gridCapacity15_20: 638,
            gridCapacity20_25: 781,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.499,
            gridEnergyNight: 0.399,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "elinett": {
        id: "elinett",
        description: "Elinett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 170,
            gridCapacity2_5: 212.5,
            gridCapacity5_10: 255,
            gridCapacity10_15: 425,
            gridCapacity15_20: 510,
            gridCapacity20_25: 595,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4326,
            gridEnergyNight: 0.3326,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: true,
        }
    },
    "elvia": {
        id: "elvia",
        description: "Elvia",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 120,
            gridCapacity2_5: 190,
            gridCapacity5_10: 305,
            gridCapacity10_15: 420,
            gridCapacity15_20: 535,
            gridCapacity20_25: 650,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.475,
            gridEnergyNight: 0.4,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: true,
        }
    },
    "fagne": {
        id: "fagne",
        description: "Fagne",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 310,
            gridCapacity2_5: 310,
            gridCapacity5_10: 410,
            gridCapacity10_15: 510,
            gridCapacity15_20: 610,
            gridCapacity20_25: 710,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5151,
            gridEnergyNight: 0.4151,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "foie": {
        id: "foie",
        description: "Føie",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 185,
            gridCapacity2_5: 200,
            gridCapacity5_10: 495,
            gridCapacity10_15: 820,
            gridCapacity15_20: 1025,
            gridCapacity20_25: 1230,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5688,
            gridEnergyNight: 0.4341,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "glitre": {
        id: "glitre",
        description: "Glitre Energi",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 150,
            gridCapacity2_5: 250,
            gridCapacity5_10: 410,
            gridCapacity10_15: 735,
            gridCapacity15_20: 975,
            gridCapacity20_25: 1210,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4725,
            gridEnergyNight: 0.3525,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "isaltennett": {
        id: "isaltennett",
        description: "ISalten Nett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 95,
            gridCapacity2_5: 285,
            gridCapacity5_10: 380,
            gridCapacity10_15: 475,
            gridCapacity15_20: 570,
            gridCapacity20_25: 665,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.1583,
            gridEnergyNight: 0.0583,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: true,
        }
    },
    "klive": {
        id: "klive",
        description: "Klive",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 433.75,
            gridCapacity2_5: 433.75,
            gridCapacity5_10: 538.75,
            gridCapacity10_15: 715,
            gridCapacity15_20: 953.75,
            gridCapacity20_25: 1192.50,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.3134,
            gridEnergyNight: 0.3134,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "lede": {
        id: "lede",
        description: "Lede",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 205,
            gridCapacity2_5: 205,
            gridCapacity5_10: 350,
            gridCapacity10_15: 493.75,
            gridCapacity15_20: 638.75,
            gridCapacity20_25: 783.75,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4176,
            gridEnergyNight: 0.4176,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "linea": {
        id: "linea",
        description: "Linea",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 137.5,
            gridCapacity2_5: 225,
            gridCapacity5_10: 350,
            gridCapacity10_15: 512.5,
            gridCapacity15_20: 675,
            gridCapacity20_25: 925,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4551,
            gridEnergyNight: 0.3451,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: true,
        }
    },
    "linja": {
        id: "linja",
        description: "Linja",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 193,
            gridCapacity2_5: 268,
            gridCapacity5_10: 343,
            gridCapacity10_15: 493,
            gridCapacity15_20: 593,
            gridCapacity20_25: 693,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4426,
            gridEnergyNight: 0.4051,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "lnett": {
        id: "lnett",
        description: "Lnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 250,
            gridCapacity2_5: 250,
            gridCapacity5_10: 350,
            gridCapacity10_15: 475,
            gridCapacity15_20: 625,
            gridCapacity20_25: 750,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.486,
            gridEnergyNight: 0.406,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: false,
        }
    },
    "mellom": {
        id: "mellom",
        description: "Mellom",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 186,
            gridCapacity2_5: 279,
            gridCapacity5_10: 419,
            gridCapacity10_15: 559,
            gridCapacity15_20: 708,
            gridCapacity20_25: 885,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4465,
            gridEnergyNight: 0.3715,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "midtnett": {
        id: "midtnett",
        description: "Midtnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 230,
            gridCapacity2_5: 230,
            gridCapacity5_10: 345,
            gridCapacity10_15: 518,
            gridCapacity15_20: 776,
            gridCapacity20_25: 1164,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4926,
            gridEnergyNight: 0.3801,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "morenett": {
        id: "morenett",
        description: "Mørenett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 173,
            gridCapacity2_5: 216,
            gridCapacity5_10: 259,
            gridCapacity10_15: 431,
            gridCapacity15_20: 518,
            gridCapacity20_25: 604,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4051,
            gridEnergyNight: 0.3301,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "nettselskapet": {
        id: "nettselskapet",
        description: "Nettselskapet",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 100,
            gridCapacity2_5: 187.5,
            gridCapacity5_10: 312.5,
            gridCapacity10_15: 462.5,
            gridCapacity15_20: 612.5,
            gridCapacity20_25: 762.5,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4132,
            gridEnergyNight: 0.3119,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "norgesnett": {
        id: "norgesnett",
        description: "Norgesnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 168.75,
            gridCapacity2_5: 281.25,
            gridCapacity5_10: 462.5,
            gridCapacity10_15: 822.5,
            gridCapacity15_20: 1092.5,
            gridCapacity20_25: 1355,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5676,
            gridEnergyNight: 0.4426,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "tensio": {
        id: "tensio",
        description: "Tensio",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 73,
            gridCapacity2_5: 128,
            gridCapacity5_10: 219,
            gridCapacity10_15: 323,
            gridCapacity15_20: 426,
            gridCapacity20_25: 530,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.3626,
            gridEnergyNight: 0.2839,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "tensionord": {
        id: "tensio",
        description: "Tensio Trøndelag Nord",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 83,
            gridCapacity2_5: 147,
            gridCapacity5_10: 252,
            gridCapacity10_15: 371,
            gridCapacity15_20: 490,
            gridCapacity20_25: 610,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.3770,
            gridEnergyNight: 0.2520,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
    "vonett": {
        id: "vonett",
        description: "Vonett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 209,
            gridCapacity2_5: 272,
            gridCapacity5_10: 335,
            gridCapacity10_15: 460,
            gridCapacity15_20: 586,
            gridCapacity20_25: 711,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.499,
            gridEnergyNight: 0.436,
            gridEnergyLowWeekends: false,
            gridEnergyLowHoliday: false,
        }
    },
};

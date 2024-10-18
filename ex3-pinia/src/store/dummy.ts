

export const searchContext = {
  basicSearch: {
    query: "",
    queryType: "formula",
    matchExactly: false
  },
  advancedSearch: {
    solvent: "acid",
    solventType: 1,
    propertyRanges: [
      {
        name: "Tm",
        min: 300,
        max: 400
      },
      {
        name: "Tb",
        min: 300
      },
      {
        name: "Pc"
      }
    ]
  }
}

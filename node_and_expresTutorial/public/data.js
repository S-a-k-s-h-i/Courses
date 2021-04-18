const colors = [
    {
        id:1,
        color: "black",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255,255,255,1],
          hex: "#000"
        }
      },
      {
        id:2,
        color: "red",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255,0,0,1],
          hex: "#FF0"
        }
      },
      {
        id:3,
        color: "blue",
        category: "hue",
        type: "primary",
        code: {
          rgba: [0,0,255,1],
          hex: "#00F"
        }
      },
      {
        id:4,
        color: "yellow",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255,255,0,1],
          hex: "#FF0"
        }
      },
      {
        id:5,
        color: "green",
        category: "hue",
        type: "secondary",
        code: {
          rgba: [0,255,0,1],
          hex: "#0F0"
        }
      }
]

const people = [
    {id:1,name:'john'},
    {id:2,name:'steve'},
    {id:3,name:'harry'},
    {id:4,name:'bella'}
]

module.exports ={ colors, people}
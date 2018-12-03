const stateobject = [{
  width:5,
  category:'basicinfo',
  maptype:'InputFieldContainer',
  standardwidth:'fifth',
  alignment:'row',
  data:[{
    placeholder:"Character Name",
    value:"Light Scratch",
    id:"charname",
  },{
    placeholder:"Class & Level",
    value:"Paladin",
    id:"class",
    suggestions:["Paladin", "Ranger", "Rogue", "Wizard", "Monk", "Sorcerer", "Barbarian"],
  },{
    placeholder:"Background",
    id:"background",
  },{
    placeholder:"Player Name",
    id:"name",
  },{
    placeholder:"Faction",
    id:"faction",
  },{
    placeholder:"Race",
    id:"race",
  },{
    placeholder:"Alignment",
    id:"alignment",
  },{
    placeholder:"EXP",
    id:"exp",
  },{
    placeholder:"DCI Number",
    id:"dci",
  }],
},{
  width:6,
  category:'abilities',
  maptype:'ValueAndModifiableRange',
  standardwidth:'fifth',
  alignment:'row',
  data:[{
    title:"Strength",
    value:10,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Dexterity",
    value:10,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Constitution",
    value:10,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Intelligence",
    value:10,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Wisdom",
    value:10,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Charisma",
    value:10,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  }]
},{
  width:2,
  category:'inspirations',
  maptype:'KeyValues',
  standardwidth:'fifth',
  alignment:'col',
  data:[{
    fieldtype:'number',
    title:"Inspiration",
    value:0,
    id:"inspiration",
  },{
    fieldtype:'number',
    title:"Proficiency",
    value:0,
    id:"proficiency",
  }]
}]
export default stateobject;

const stateobject = [{
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
  width:5,
  category:'basicinfo',
  maptype:'InputFieldContainer',
  standardwidth:'fifth',
  alignment:'row',
}]
export default stateobject;

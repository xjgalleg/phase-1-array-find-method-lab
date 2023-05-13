// code your solution here
function superbowlWin(record){
    let win = record.find(({result}) => result === "W")
        if (win){
            return win["year"]
        }
}


function gpt_grid_problem()
{
  
    console.log('===========================')
    let grid: number[] = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    let threes: string[] = [];
    let valids: string[] = [];

    for (let n = 0; n < 512; n++)
    {
        let b = toBinary(n);
        let ones = 0;
        for (let c of b) if (c == '1') ones++;
        if (ones == 3) threes.push(b);
        console.log(`${n}=${b}`);
    }
        
    for (let t of threes) 
    {
        let s = `${t[0]} ${t[1]} ${t[2]}\n${t[3]} ${t[4]} ${t[5]}\n${t[6]} ${t[7]} ${t[8]}\n` // print out 3x3 grid
        let indexes = ``;
        for (let i = 0; i < t.length; i++) if (t.charAt(i) == '1') indexes += `${i}:`; // store indexes of the 1s
        indexes = indexes.substring(0, indexes.length - 1); // chop off last :

        // Any of the ones lack a 1-cell neighbor?
        let targets = indexes.split(':');
        let get_out = false;
        // console.log(`=======================\ntargets: ${indexes}\n\n${s}`);
        for (let target of targets)
        {
            // console.log(`evaluating target ${target} which is ${t[target]}`);
            switch (target) 
            {
                case '0':
                    if (t[1] == '0' && t[3] == '0' && t[4] == '0') get_out = true;
                break;
                case '1':
                    if (t[0] == '0' && t[2] == '0' && t[3] == '0' && t[4] == '0' && t[5] == '0') get_out = true;
                break;
                case '2':
                    if (t[1] == '0' && t[4] == '0' && t[5] == '0') get_out = true;
                break;
                case '3':
                    if (t[0] == '0' && t[1] == '0' && t[4] == '0' && t[6] == '0' && t[7] == '0') get_out = true;
                break;
                case '4':
                    if (t[0] == '0' && t[1] == '0' && t[2] == '0' && t[3] == '0' && t[5] == '0' && t[6] == '0' && t[7] == '0' && t[8] == '0') get_out = true;
                break;
                case '5':
                    if (t[1] == '0' && t[2] == '0' && t[4] == '0' && t[7] == '0' && t[8] == '0') get_out = true;
                break;
                case '6':
                    if (t[3] == '0' && t[4] == '0' && t[7] == '0') get_out = true;
                break;
                case '7':
                    if (t[3] == '0' && t[4] == '0' && t[5] == '0' && t[6] == '0' && t[8] == '0') get_out = true;
                break;
                case '8':
                    if (t[5] == '0' && t[4] == '0' && t[7] == '0') get_out = true;
                break;
            }
            // console.log(`get_out value: ${get_out}`);
            if (get_out) console.log(`invalid\n${s}`);
            if (get_out) break; // exit loop due to no neighbors detected for this target
        }
        if (!get_out) if (!valids.includes(s)) valids.push(s);
    }
    console.log(`==============================================`);
	for (let v of valids) console.log(`${v}`);
    console.log(`Total threes: ${threes.length}`);
	console.log(`Total valid grids: ${valids.length}`);

}

function toBinary(n: number) 
{
  return Number(n).toString(2).padStart(9, '0');
}

grid_gpt_problem();

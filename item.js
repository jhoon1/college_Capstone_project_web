function textValue(self2){
    if(isNaN(self2.value) == true){
        self2.value = ''
    }
    else{
        self2.value
    }
}

function textValue2(self2){
    if(isNaN(document.getElementById(self2).value) == true){
        document.getElementById(self2).value = ''
    }
    else{
        document.getElementById(self2).value
    }
}

function buttonchangeValue(self, self2){
    if(self.value == '-'){
        if(document.getElementById(self2).value <= 1){
            document.getElementById(self2).value = 1;
        }
        else{
            document.getElementById(self2).value --;
        }
        
    }
    else if(self.value == '+'){
        document.getElementById(self2).value ++;
    }
}

function getText(name, at){
    var httext = document.getElementById(name).innerText;
    document.getElementById(at).innerText = httext;
}

function listDelete(all){
    var element = document.getElementById(all);
    element.remove();
}

function itemGolist(all, detail, at, number, name, self2, no, obn){
    if(document.getElementById(all)){
        
    }
    else{
        var ml = document.createElement('div');
        ml.id = all;
        document.getElementById('order_list').appendChild(ml);
        var il = document.createElement('div');
        il.id = detail;
        il.className = 'item_list';
        document.getElementById(all).appendChild(il);
        var lmn = document.createElement('div');
        lmn.id = at;
        document.getElementById(detail).appendChild(lmn);
        getText(name, at)
        var i_n = document.createElement('div');
        i_n.id = number;
        i_n.className = 'item_number';
        document.getElementById(detail).appendChild(i_n);
        var inm = document.createElement('input');
        inm.type = 'button';
        inm.className = 'item_number_minus';
        inm.value = '-';
        // document.getElementById(number).firstElementChild.addEventListener('click', function(){
        //     buttonchangeValue(self, self2);
        // });
        document.getElementById(number).appendChild(inm);
        var inv = document.createElement('input');
        inv.type = 'text';
        inv.id = self2;
        inv.className = 'item_number_value';
        inv.value = document.getElementById(obn).value;
        inv.maxlength = '6';
        inv.autocomplete = 'off';
        // inv.addEventListener('input', function(){
        //     textValue(self);
        // });
        document.getElementById(number).appendChild(inv);
        var inp = document.createElement('input');
        inp.type = 'button';
        inp.className = 'item_number_plus';
        inp.value = '+';
        // inp.addEventListener('click', function(){
        //     buttonchangeValue(self, self2);
        // });
        document.getElementById(number).appendChild(inp);
        var c = document.createElement('div');
        c.id = no;
        c.className = 'cancel';
        document.getElementById(detail).appendChild(c);
        var cb = document.createElement('input');
        cb.type = 'button';
        cb.className = 'cancel_button';
        cb.value = 'X';
        cb.addEventListener('click', function(){
            listDelete(all);
        });
        document.getElementById(no).appendChild(cb);
        var btm = document.getElementById(number).firstElementChild;
        btm.addEventListener('click', function(){
            buttonchangeValue(this, self2);
        });
        var btp = document.getElementById(number).lastElementChild;
        btp.addEventListener('click', function(){
            buttonchangeValue(this, self2);
        });
        var btv = document.getElementById(self2);
        btv.addEventListener('input', function(){
            textValue2(self2);
        });
    }
}

function itemGolist2(all, detail, at, number, name, self2, no, obn){
    var ht = `<div id=${all}>
    <div id=${detail} class="item_list">
        <div id=${at}>
        </div>
        <div id=${number} class="item_number">
            <input type="button" class="item_number_minus" value="-">
            <input type="text" id=${self2} class="item_number_value" value=${document.getElementById(obn).value} maxlength="6" autocomplete="off">
            <input type="button" class="item_number_plus" value="+">
        </div>
        <div id=${no} class="cancel">
            <input type="button" class="cancel_button" value="X">
        </div>
    </div>
    </div>`;
    document.getElementById('order_list').append(ht);
    var btm = document.getElementById(number).firstElementChild;
    btm.addEventListener('click', function(){
        buttonchangeValue(this, self2);
    });
    var btp = document.getElementById(number).lastElementChild;
    btp.addEventListener('click', function(){
        buttonchangeValue(this, self2);
    });
    var btv = document.getElementById(self2);
    btv.addEventListener('input', function(){
        textValue2(self2);
    });
    getText(name ,at);
    var cb = document.getElementById(no).firstElementChild;
    cb.addEventListener('click', function(){
        listDelete(all);
    });
}
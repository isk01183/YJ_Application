let id = null;

export function idChange( change_id ){
    id = change_id;
}

export function login_ck(){
    var id_ck = "0";
    if( "" === id || null === id ){
        id_ck = "1";
    }
    return id_ck;
}
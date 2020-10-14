
exports.getDate = function(){
    const today=new Date();
    options={
        weekday:'long',
        year:'numeric',
        month:'long'
    }
    date=today.toLocaleDateString('en-US',options)
    return date;
}

exports.getDay = function(){
    const today=new Date();
    options={
        weekday:'long',
    }
    day=today.toLocaleDateString('en-US',options)
    return day;
}

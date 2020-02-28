$btnCal. click (function(){
    //get value
    var w = Number( $width.val()),
        h = Number( $height.val());
    //calculate
    // var p = roundFractional(w*2 + h*2, 4) ;
    // a = roundFractional(w * h, 10);

    ///output
    // $perimeter.val(p);
    // $area.val(a);

    var rect = rectangle();

    $perimeter .val( rect . perimeter(w,h));
    $area. val(rect. area(w,h));
})
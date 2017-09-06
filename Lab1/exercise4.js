class BMICalculator{
    Constructor(){
        this.num1 = Number(document.getElementsByName('height'));
        this.num2 = Number(document.getElementsByName('width'));
    }
    isEmptyValid(){
        return this.num1 == '' || this.num1 == '' ? true : false;
    }
    isNaNValid(){
        return isNaN(this.num1) || isNaN(this.num2) ? true : false;
    }
    
}
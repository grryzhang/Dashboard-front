"use strict";
var Corporation = (function () {
    function Corporation(name, address, factoryAddress, contact, fax, telePhone, mainProducts, resourceUrl, businessType, factorySize, yearEstablished, annualOutputValue, annualExportRevenue, highestEverAnnualOutput, noOfProductionLines, imageId, cooperator, recommended) {
    }
    return Corporation;
}());
exports.Corporation = Corporation;
var EvaluationSupplierInfo = (function () {
    function EvaluationSupplierInfo(FNUMBER, FNAME, FSHORTNAME, FPARENTNO, FADDR, FID, FNAME_EN, INDUSTRY, INDUSTRY_EN) {
    }
    return EvaluationSupplierInfo;
}());
exports.EvaluationSupplierInfo = EvaluationSupplierInfo;
var CorporationGradeList = (function () {
    function CorporationGradeList(corporationName, corporationEName, FNUMBER, gradeScore, lastGradeTime, count) {
    }
    return CorporationGradeList;
}());
exports.CorporationGradeList = CorporationGradeList;
var CorporationGrade = (function () {
    function CorporationGrade(id, corporationId, corporationGroup, gradeId, gradeScore, gradeLevel, createTime, gradeItems, corporation) {
    }
    return CorporationGrade;
}());
exports.CorporationGrade = CorporationGrade;
var CorporationGradeItems = (function () {
    function CorporationGradeItems(itemId, gradeId, gradeItemId, gradeItemScore, gradeItemWeight, gradeItemGroup, gradeItem) {
    }
    return CorporationGradeItems;
}());
exports.CorporationGradeItems = CorporationGradeItems;
//# sourceMappingURL=corporation.js.map
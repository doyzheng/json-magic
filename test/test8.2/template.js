// 对象嵌套对象

module.exports = {
    'api': 'ordering/classorders/view',
    'result': '000000',
    'msg': '',
    '*list@data': {
        'order': {
            'sourceOrderid': null,
            'sourceOrderno': null,
            'sourceClassordertype': null,
            'id@orderId': '732865622827859969',
            'number@orderNo': 'ZC2020071515462046988148',
            'brandId': 'YOULU',
            'corporationId@userId': 'CORP20200714020000000006',
            'creatorId': 'USER20181023010000005660',
            'coOwnerid': 'USER20200324130000005223',
            'coOwnerdptid': 'DPT20191127010000000403',
            'coOwnerschoolid': 'SCHOOL20190411010000000019',
            'from@orderSource': 'OP',
            'orderSourcedes': '运营平台',
            'orderCreator': 'USER20181023010000005660',
            'orderCreateddate': '2020-07-15 15:46:20',
            'orderMemo': '',
            'coSubtype': '',
            'coType': 'GEN',
            'coTypename': '正常订单',
            'coGivesituation': '',
            'coRelatedorderno': '',
            'coReferuserid': '',
            'coReferorderno': '',
            'coSubtypedes': '',
            'coGivesituationdes': '',
            'orderApprovalnode': '',
            'verifyTaskId@aiId': '732865622827859968',
            'totalMoneyAmount@orderTotalamount': 1200,
            'paidMoneyAmount@orderPayamount': 1200,
            'coIntoamount': 0,
            'orderPaystatus': 'A',
            'coGoodsamountstatus': '',
            'orderBusinesstype': 'O',
            'coAssistservice': undefined,
            'coServiceschoolid': null,
            'attachmentMaterials': [],
            'coOwnername': '叶彦飞',
            'orderCreatorname': 'admin',
            'schoolName': '总部',
            'serviceSchoolName': null,
            'coOwnerdptname': '网站微服务研发部[人事系统]',
            'aiApplyform': {
                type: 'string',
                filter(val) {
                    var convert = this.convert;
                    return convert(JSON.parse(val), ({
                        'employeeId@ownerId': {
                            type: 'string',
                            filter(val) {
                                return val;
                            },
                        },
                        'departmentId@ownerDptId': 'DPT20191127010000000403',
                        'schoolId@ownerSchoolId': 'SCHOOL20190411010000000019',
                        'contracts': [
                            {
                                'number@contractNo': '1111111',
                                'name@contractName': '测试',
                                'isComeIntoForce@contractStatus': 'Y',
                                'term@contractDate': '2020-07-01~2020-07-31',
                                'totalMoneyAmount@contractAmount': '1200',
                                'teachMethod@contractTeachMethod': '41',
                                'teachMethodText@contractTeachMethodDes': '网络',
                                'agreement@contractService': '11',
                                'agreementText@contractServiceDes': '不重读不退费',
                                'agreement_rereadYear@contractServiceCode': '',
                                'agreement_refundableMoneyAmount@contractServiceCodeDes': '',
                                'paymentPattern@contractPayMethod': '31',
                                'paymentPatternText@contractPayMethodDes': '一次性支付',
                                'betFloatInfo': {
                                    'betTarget@category': '1',
                                    'betTargetAmount@num': '',
                                },
                                'rewardFloatInfo': {
                                    'betPunishUnit@category': '1',
                                    'betPunishMoneyAmount@num': '',
                                },
                                'betPunishMaxMoneyAmount@contractPayMaxFloat': '',
                            }],
                        'planFile': '',
                    }));
                },
            },
            'verifyState@aiApprovalstatus': 'PAS',
            'custName': '摩托车',
            'custMobile': null,
            'coReferusername': '',
            'coReferusermobilestr': '',
            'coReferusermobile': '',
        },
        'classes': [
            {
                'classService': {
                    'classAtype': 'E',
                    'classAtypeName': '电子协议',
                    'classAsertype': 'R',
                    'classAsertypeName': '重读',
                    'classArepeatcount': 0,
                    'classArepeatbookamount': null,
                    'classArefundtype': null,
                    'classArefundtypeName': '',
                    'csRefundableamount': null,
                    'classsubjectArefundscale': 0.0,
                    'csAgreementurl': null,
                },
                'giveClasses': [],
                'sumAmount': 1200,
                'quantity': 12,
                'orderitemOperationtype': null,
                'oiId': '732865623335370752',
                'projectId': 'PROJECT20191126010000000398',
                'projectName': '初级安全工程师',
                'productId': 'CLASSTYPE20200320010000000101',
                'productName': '2020初级安全工程师化工安全2科钻石班',
                'skuId': 'CLASS20200320010000000101',
                'skuName': '2020初级安全工程师化工安全2科钻石班',
                'skuAmount': 388000,
                'skuMindiscount': 0.5,
                'oiAmount': 100,
                'classSendstatus': 'Y',
                'classGoodsstatus': null,
                'oiMainorderitemid': '',
                'pypYear': 2020,
                'pypSeq': 1,
                'classTeachmethod': 'N',
                'classTeachmethodName': '网络课',
                'coiOpendate': '',
                'classExpiredate': '2020-12-31 00:00:00',
                'coiClassstatus': 'GEND',
                'coiClassstatusDes': '正常',
                'subjects': [
                    {
                        'subjectId': 'SUBJECT20191212010000000012',
                        'subjectName': '化工安全技术',
                        'subjectNature': null,
                        'oiId': '',
                    },
                    {
                        'subjectId': 'SUBJECT20191126010000000835',
                        'subjectName': '法规',
                        'subjectNature': null,
                        'oiId': '',
                    },
                ],
                'goods': [],
            },
        ],
        'receipts': [
            {
                'id@receiptId': '732865623406673920',
                'number@receiptNo': 'IN2020071515462060673375',
                'method@recMode': 'A',
                'accountNumber@accountCode': '65',
                'accountName@accountName': '北京-网站在线支付-对公支付宝',
                'channelSerialNumber@traderecordChanneltradeno': '20200715000000002',
                'moneyAmount@receiptAmount': 1200.0,
                'collectTime@receiptTradedate': '2020-07-15 00:00:00',
                'employeeId_finance@receiptHandler': 'USER20191128590000034554',
                'employeeName_finance@receiptHandlerName': '尚冰倩',
                'receiptOwnerships': [
                    {
                        'employeeId_business@roOwnerid': 'USER20191128590000034554',
                        'employeeName_business@roOwnername': '尚冰倩',
                        'schoolId_business@roOwnerschoolid': 'SCHOOL20190411010000000175',
                        'schoolName_business@roOwnerschoolname': '郑州',
                        'departmentId_business@roOwnerdptid': 'DPT20191127010000000509',
                        'departmentName_business@roOwnerdptname': '销售一组[人事系统]',
                    },
                ],
                'uploadedReceiptFileURL@materialUrls': [
                    '2020/07/15/15947991770360871.png',
                ],
            },
        ],
    },
    'gid': 'G2020080116445901000002',
    'seqno': '2020080116445901000002',
    'cid': 'REQ_g0parn6aqcsi5d06',
    'timestamp': 1596271499561,
};

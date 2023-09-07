/* eslint-disable @typescript-eslint/no-namespace */
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-10-18 16:46:44
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 15:38:52
 */

export namespace getListDevValidator {
    /** 接口入参类型定义 */
    export interface ParamType {
        id: number;
    }
    /** 接口回参类型定义 */
    export interface Data {
        defaultVarchar: string;
        pageList: PageList[];
        pageNum: number;
        pageSize: number;
        totalCnt: number;
        totalPage: number;
    }

    export interface PageList {
        areaId: number;
        areaName: string;
        areaNameAllSpell: string;
        attention: number;
        attributionType: number;
        buildingDirectionCode: number;
        buildingDirectionName: string;
        buildingId: number;
        coverPictureUrl: string;
        createYear?: number;
        dataSourcesFlg: string;
        domainAccount: string;
        estateAddress: string;
        estateId: number;
        estateName: string;
        estateNameAllSpell: string;
        fangdiDistrictCode: string;
        firstNumber: string;
        fixTypeCode: number;
        fixTypeName: string;
        fullTwoFiveFlg?: number;
        grade: string;
        hallNum: number;
        havePhotoFlg: number;
        haveVideoFlg: number;
        haveVrFlg: number;
        issueDate: string;
        issueInfo: string;
        issueStatus: number;
        keyEntrustFlg: number;
        latitude: string;
        layerHighLowTypeCode: number;
        layerHighLowTypeName: string;
        leadLookNum: number;
        longitude: string;
        nearBusStop: number;
        nearBusinessZone: number;
        nearFoodMarket: number;
        nearHospital: number;
        nearSubwayFlg: number;
        nearestMetro: string;
        netWorkBkCaseNo: string;
        pickHouseFlg: number;
        plateId: number;
        plateName: string;
        plateNameAllSpell: string;
        price: number;
        priceUnit: number;
        primaryKeyId: number;
        propertyAttachVOList: PropertyAttachVOList[];
        propertyId: string;
        propertyNumber: string;
        propertySquare: number;
        propertyTitle: string;
        propertyType: number;
        propertyeffectiveId: number;
        reducePriceInfo: string;
        roomHall: string;
        roomHallToilet: string;
        roomId: number;
        roomNum: number;
        sceneryHouseFlg: number;
        schoolAreaHouseFlg: number;
        takeLookNum: number;
        takeLookTimeTypeCode?: number;
        tipPriceTag: number;
        tipPriceTagName: string;
        toiletNum: number;
        totalLayerSurface: number;
        totalMoney: string;
        tradeNo: string;
        onlyOneFlg?: number;
    }

    export interface PropertyAttachVOList {
        attachUrl: string;
        coverPictureFlg: number;
        picLevel: number;
        propertyAttachId: number;
        propertyAttachSourceCode: number;
        propertyAttachSourceName: string;
        propertyAttachTypeCode: number;
        propertyAttachTypeName: string;
        propertyPictureTypeCode: number;
        propertyPictureTypeName: string;
        roleType: number;
        sort: number;
        tableName: string;
    }

    export interface ReturnType {
        businessCode: string;
        data: Data;
        errorCode: string;
        msg: string;
        success: boolean;
    }
}

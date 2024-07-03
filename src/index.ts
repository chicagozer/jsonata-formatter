import { formatJsonata } from "@stedi/prettier-plugin-jsonata/dist/lib";

async function format() {
  const expression = '{ "dealer": `star:ShowPartsMaster`[0].`star:ApplicationArea`[0].`star:Destination`[0].`star:DealerNumberID`[0]._text[0], "docid": `star:ShowPartsMaster`[0].`star:ShowPartsMasterDataArea`[0].[`star:PartMaster`][0].`star:PartMasterHeader`[0].`star:DocumentIdentificationGroup`[0].`star:DocumentIdentification`[0].`star:DocumentID`[0]._text[0], "lines": [`star:ShowPartsMaster`[0].`star:ShowPartsMasterDataArea`[0].`star:PartMaster`[0].`star:PartMasterLine`.$.{ "id": `star:PartsProductItem`[0].`star:ItemID`[0]._text[0], "description": `star:PartsProductItem`[0].`star:PartItemDescription`[0]._text[0], "hazmat": `star:PartsProductItem`[0].`star:HazmatIndicator`[0]._text[0] in 'true', "pricing": [`star:PartMasterPricing`.$.{ "type": `star:PartMasterPriceTypeString`[0]._text[0], "currency": `star:TotalAmount`[0]._attributes.currencyID, "amount": $number(`star:TotalAmount`[0]._text[0]) } ] }] }';
  const formattedExpression = await formatJsonata(expression);

  console.log(formattedExpression);
}

format().catch((e) => {
  console.log(e);
});
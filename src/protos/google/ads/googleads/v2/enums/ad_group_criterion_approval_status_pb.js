var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus",null,global),proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.displayName="proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum;return proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus={UNSPECIFIED:0,UNKNOWN:1,APPROVED:2,DISAPPROVED:3,PENDING_REVIEW:4,UNDER_REVIEW:5},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);
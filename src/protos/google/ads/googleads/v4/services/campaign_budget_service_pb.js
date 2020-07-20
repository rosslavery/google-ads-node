var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_campaign_budget_pb=require("../../../../../google/ads/googleads/v4/resources/campaign_budget_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_campaign_budget_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.CampaignBudgetOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.CampaignBudgetOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse",null,global),proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.displayName="proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest"),proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.displayName="proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest"),proto.google.ads.googleads.v4.services.CampaignBudgetOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.CampaignBudgetOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.CampaignBudgetOperation.displayName="proto.google.ads.googleads.v4.services.CampaignBudgetOperation"),proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.displayName="proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse"),proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.displayName="proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest;return proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetCampaignBudgetRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.toObject=function(e,o){var s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.CampaignBudgetOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest;return proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.CampaignBudgetOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.deserializeBinaryFromReader),e.addOperations(s);break;case 3:s=o.readBool();e.setPartialFailure(s);break;case 4:s=o.readBool();e.setValidateOnly(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.serializeBinaryToWriter),(s=e.getPartialFailure())&&o.writeBool(3,s),(s=e.getValidateOnly())&&o.writeBool(4,s)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.CampaignBudgetOperation,2)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.CampaignBudgetOperation,o)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v4.services.CampaignBudgetOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.CampaignBudgetOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.toObject=function(e,o){var s,t={updateMask:(s=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,s),create:(s=o.getCreate())&&google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget.toObject(e,s),update:(s=o.getUpdate())&&google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget.toObject(e,s),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.CampaignBudgetOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.CampaignBudgetOperation;return proto.google.ads.googleads.v4.services.CampaignBudgetOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var s=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(s,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(s);break;case 1:s=new google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget;o.readMessage(s,google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget.deserializeBinaryFromReader),e.setCreate(s);break;case 2:s=new google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget;o.readMessage(s,google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget.deserializeBinaryFromReader),e.setUpdate(s);break;case 3:s=o.readString();e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.CampaignBudgetOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getUpdateMask())&&o.writeMessage(4,s,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget.serializeBinaryToWriter),null!=(s=e.getUpdate())&&o.writeMessage(2,s,google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget.serializeBinaryToWriter),null!=(s=jspb.Message.getField(e,3))&&o.writeString(3,s)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget,1)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_campaign_budget_pb.CampaignBudget,2)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CampaignBudgetOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.CampaignBudgetOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.toObject=function(e,o){var s,t={partialFailureError:(s=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,s),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.toObject,e)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse;return proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(s);break;case 2:s=new proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.deserializeBinaryFromReader),e.addResults(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getPartialFailureError())&&o.writeMessage(3,s,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult,2)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult,o)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult;return proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCampaignBudgetResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);
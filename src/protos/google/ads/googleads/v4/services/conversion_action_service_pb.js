var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_conversion_action_pb=require("../../../../../google/ads/googleads/v4/resources/conversion_action_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_conversion_action_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.ConversionActionOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.ConversionActionOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetConversionActionRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateConversionActionResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateConversionActionsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateConversionActionsResponse",null,global),proto.google.ads.googleads.v4.services.GetConversionActionRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetConversionActionRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetConversionActionRequest.displayName="proto.google.ads.googleads.v4.services.GetConversionActionRequest"),proto.google.ads.googleads.v4.services.MutateConversionActionsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateConversionActionsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.displayName="proto.google.ads.googleads.v4.services.MutateConversionActionsRequest"),proto.google.ads.googleads.v4.services.ConversionActionOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.ConversionActionOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.ConversionActionOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.ConversionActionOperation.displayName="proto.google.ads.googleads.v4.services.ConversionActionOperation"),proto.google.ads.googleads.v4.services.MutateConversionActionsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateConversionActionsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.displayName="proto.google.ads.googleads.v4.services.MutateConversionActionsResponse"),proto.google.ads.googleads.v4.services.MutateConversionActionResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateConversionActionResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateConversionActionResult.displayName="proto.google.ads.googleads.v4.services.MutateConversionActionResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetConversionActionRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetConversionActionRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetConversionActionRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetConversionActionRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetConversionActionRequest;return proto.google.ads.googleads.v4.services.GetConversionActionRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetConversionActionRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetConversionActionRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetConversionActionRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetConversionActionRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetConversionActionRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetConversionActionRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.toObject=function(e,o){var s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.ConversionActionOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateConversionActionsRequest;return proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.ConversionActionOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.ConversionActionOperation.deserializeBinaryFromReader),e.addOperations(s);break;case 3:s=o.readBool();e.setPartialFailure(s);break;case 4:s=o.readBool();e.setValidateOnly(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.ConversionActionOperation.serializeBinaryToWriter),(s=e.getPartialFailure())&&o.writeBool(3,s),(s=e.getValidateOnly())&&o.writeBool(4,s)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.ConversionActionOperation,2)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.ConversionActionOperation,o)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateConversionActionsRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},proto.google.ads.googleads.v4.services.ConversionActionOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v4.services.ConversionActionOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.ConversionActionOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.ConversionActionOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.ConversionActionOperation.toObject=function(e,o){var s,t={updateMask:(s=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,s),create:(s=o.getCreate())&&google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction.toObject(e,s),update:(s=o.getUpdate())&&google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction.toObject(e,s),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.ConversionActionOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.ConversionActionOperation;return proto.google.ads.googleads.v4.services.ConversionActionOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.ConversionActionOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var s=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(s,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(s);break;case 1:s=new google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction;o.readMessage(s,google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction.deserializeBinaryFromReader),e.setCreate(s);break;case 2:s=new google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction;o.readMessage(s,google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction.deserializeBinaryFromReader),e.setUpdate(s);break;case 3:s=o.readString();e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.ConversionActionOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.ConversionActionOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getUpdateMask())&&o.writeMessage(4,s,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction.serializeBinaryToWriter),null!=(s=e.getUpdate())&&o.writeMessage(2,s,google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction.serializeBinaryToWriter),null!=(s=jspb.Message.getField(e,3))&&o.writeString(3,s)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction,1)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.ConversionActionOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_conversion_action_pb.ConversionAction,2)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.ConversionActionOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.ConversionActionOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.ConversionActionOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.ConversionActionOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.toObject=function(e,o){var s,t={partialFailureError:(s=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,s),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateConversionActionResult.toObject,e)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateConversionActionsResponse;return proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(s);break;case 2:s=new proto.google.ads.googleads.v4.services.MutateConversionActionResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateConversionActionResult.deserializeBinaryFromReader),e.addResults(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getPartialFailureError())&&o.writeMessage(3,s,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.MutateConversionActionResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateConversionActionResult,2)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateConversionActionResult,o)},proto.google.ads.googleads.v4.services.MutateConversionActionsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateConversionActionResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateConversionActionResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateConversionActionResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateConversionActionResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateConversionActionResult;return proto.google.ads.googleads.v4.services.MutateConversionActionResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateConversionActionResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateConversionActionResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateConversionActionResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateConversionActionResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateConversionActionResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateConversionActionResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);
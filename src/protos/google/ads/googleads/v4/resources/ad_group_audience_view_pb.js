var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.AdGroupAudienceView",null,global),proto.google.ads.googleads.v4.resources.AdGroupAudienceView=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.AdGroupAudienceView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.AdGroupAudienceView.displayName="proto.google.ads.googleads.v4.resources.AdGroupAudienceView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.AdGroupAudienceView.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.AdGroupAudienceView.toObject(e,this)},proto.google.ads.googleads.v4.resources.AdGroupAudienceView.toObject=function(e,o){var r={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.resources.AdGroupAudienceView.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.AdGroupAudienceView;return proto.google.ads.googleads.v4.resources.AdGroupAudienceView.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.AdGroupAudienceView.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.AdGroupAudienceView.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.AdGroupAudienceView.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.AdGroupAudienceView.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r)},proto.google.ads.googleads.v4.resources.AdGroupAudienceView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.AdGroupAudienceView.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);
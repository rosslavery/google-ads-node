var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.CustomerErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.CustomerErrorEnum.CustomerError",null,global),proto.google.ads.googleads.v3.errors.CustomerErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.CustomerErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.CustomerErrorEnum.displayName="proto.google.ads.googleads.v3.errors.CustomerErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.CustomerErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.CustomerErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.CustomerErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.CustomerErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.CustomerErrorEnum;return proto.google.ads.googleads.v3.errors.CustomerErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.CustomerErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.CustomerErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.CustomerErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.CustomerErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.CustomerErrorEnum.CustomerError={UNSPECIFIED:0,UNKNOWN:1,STATUS_CHANGE_DISALLOWED:2,ACCOUNT_NOT_SET_UP:3},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);
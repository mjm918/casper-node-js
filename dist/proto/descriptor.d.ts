import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 *
 * @generated from protobuf message google.protobuf.FileDescriptorSet
 */
export interface FileDescriptorSet {
    /**
     * @generated from protobuf field: repeated google.protobuf.FileDescriptorProto file = 1;
     */
    file: FileDescriptorProto[];
}
/**
 * Describes a complete .proto file.
 *
 * @generated from protobuf message google.protobuf.FileDescriptorProto
 */
export interface FileDescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: optional string package = 2;
     */
    package?: string;
    /**
     * Names of files imported by this file.
     *
     * @generated from protobuf field: repeated string dependency = 3;
     */
    dependency: string[];
    /**
     * Indexes of the public imported files in the dependency list above.
     *
     * @generated from protobuf field: repeated int32 public_dependency = 10;
     */
    publicDependency: number[];
    /**
     * Indexes of the weak imported files in the dependency list.
     * For Google-internal migration only. Do not use.
     *
     * @generated from protobuf field: repeated int32 weak_dependency = 11;
     */
    weakDependency: number[];
    /**
     * All top-level definitions in this file.
     *
     * @generated from protobuf field: repeated google.protobuf.DescriptorProto message_type = 4;
     */
    messageType: DescriptorProto[];
    /**
     * @generated from protobuf field: repeated google.protobuf.EnumDescriptorProto enum_type = 5;
     */
    enumType: EnumDescriptorProto[];
    /**
     * @generated from protobuf field: repeated google.protobuf.ServiceDescriptorProto service = 6;
     */
    service: ServiceDescriptorProto[];
    /**
     * @generated from protobuf field: repeated google.protobuf.FieldDescriptorProto extension = 7;
     */
    extension: FieldDescriptorProto[];
    /**
     * @generated from protobuf field: optional google.protobuf.FileOptions options = 8;
     */
    options?: FileOptions;
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     *
     * @generated from protobuf field: optional google.protobuf.SourceCodeInfo source_code_info = 9;
     */
    sourceCodeInfo?: SourceCodeInfo;
    /**
     * The syntax of the proto file.
     * The supported values are "proto2", "proto3", and "editions".
     *
     * If `edition` is present, this value must be "editions".
     *
     * @generated from protobuf field: optional string syntax = 12;
     */
    syntax?: string;
    /**
     * The edition of the proto file.
     *
     * @generated from protobuf field: optional google.protobuf.Edition edition = 14;
     */
    edition?: Edition;
}
/**
 * Describes a message type.
 *
 * @generated from protobuf message google.protobuf.DescriptorProto
 */
export interface DescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: repeated google.protobuf.FieldDescriptorProto field = 2;
     */
    field: FieldDescriptorProto[];
    /**
     * @generated from protobuf field: repeated google.protobuf.FieldDescriptorProto extension = 6;
     */
    extension: FieldDescriptorProto[];
    /**
     * @generated from protobuf field: repeated google.protobuf.DescriptorProto nested_type = 3;
     */
    nestedType: DescriptorProto[];
    /**
     * @generated from protobuf field: repeated google.protobuf.EnumDescriptorProto enum_type = 4;
     */
    enumType: EnumDescriptorProto[];
    /**
     * @generated from protobuf field: repeated google.protobuf.DescriptorProto.ExtensionRange extension_range = 5;
     */
    extensionRange: DescriptorProto_ExtensionRange[];
    /**
     * @generated from protobuf field: repeated google.protobuf.OneofDescriptorProto oneof_decl = 8;
     */
    oneofDecl: OneofDescriptorProto[];
    /**
     * @generated from protobuf field: optional google.protobuf.MessageOptions options = 7;
     */
    options?: MessageOptions;
    /**
     * @generated from protobuf field: repeated google.protobuf.DescriptorProto.ReservedRange reserved_range = 9;
     */
    reservedRange: DescriptorProto_ReservedRange[];
    /**
     * Reserved field names, which may not be used by fields in the same message.
     * A given name may only be reserved once.
     *
     * @generated from protobuf field: repeated string reserved_name = 10;
     */
    reservedName: string[];
}
/**
 * @generated from protobuf message google.protobuf.DescriptorProto.ExtensionRange
 */
export interface DescriptorProto_ExtensionRange {
    /**
     * @generated from protobuf field: optional int32 start = 1;
     */
    start?: number;
    /**
     * @generated from protobuf field: optional int32 end = 2;
     */
    end?: number;
    /**
     * @generated from protobuf field: optional google.protobuf.ExtensionRangeOptions options = 3;
     */
    options?: ExtensionRangeOptions;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 *
 * @generated from protobuf message google.protobuf.DescriptorProto.ReservedRange
 */
export interface DescriptorProto_ReservedRange {
    /**
     * @generated from protobuf field: optional int32 start = 1;
     */
    start?: number;
    /**
     * @generated from protobuf field: optional int32 end = 2;
     */
    end?: number;
}
/**
 * @generated from protobuf message google.protobuf.ExtensionRangeOptions
 */
export interface ExtensionRangeOptions {
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    /**
     * For external users: DO NOT USE. We are in the process of open sourcing
     * extension declaration and executing internal cleanups before it can be
     * used externally.
     *
     * @generated from protobuf field: repeated google.protobuf.ExtensionRangeOptions.Declaration declaration = 2;
     */
    declaration: ExtensionRangeOptions_Declaration[];
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 50;
     */
    features?: FeatureSet;
    /**
     * The verification state of the range.
     * TODO: flip the default to DECLARATION once all empty ranges
     * are marked as UNVERIFIED.
     *
     * @generated from protobuf field: optional google.protobuf.ExtensionRangeOptions.VerificationState verification = 3;
     */
    verification?: ExtensionRangeOptions_VerificationState;
}
/**
 * @generated from protobuf message google.protobuf.ExtensionRangeOptions.Declaration
 */
export interface ExtensionRangeOptions_Declaration {
    /**
     * The extension number declared within the extension range.
     *
     * @generated from protobuf field: optional int32 number = 1;
     */
    number?: number;
    /**
     * The fully-qualified name of the extension field. There must be a leading
     * dot in front of the full name.
     *
     * @generated from protobuf field: optional string full_name = 2;
     */
    fullName?: string;
    /**
     * The fully-qualified type name of the extension field. Unlike
     * Metadata.type, Declaration.type must have a leading dot for messages
     * and enums.
     *
     * @generated from protobuf field: optional string type = 3;
     */
    type?: string;
    /**
     * If true, indicates that the number is reserved in the extension range,
     * and any extension field with the number will fail to compile. Set this
     * when a declared extension field is deleted.
     *
     * @generated from protobuf field: optional bool reserved = 5;
     */
    reserved?: boolean;
    /**
     * If true, indicates that the extension must be defined as repeated.
     * Otherwise the extension must be defined as optional.
     *
     * @generated from protobuf field: optional bool repeated = 6;
     */
    repeated?: boolean;
}
/**
 * The verification state of the extension range.
 *
 * @generated from protobuf enum google.protobuf.ExtensionRangeOptions.VerificationState
 */
export declare enum ExtensionRangeOptions_VerificationState {
    /**
     * All the extensions of the range must be declared.
     *
     * @generated from protobuf enum value: DECLARATION = 0;
     */
    DECLARATION = 0,
    /**
     * @generated from protobuf enum value: UNVERIFIED = 1;
     */
    UNVERIFIED = 1
}
/**
 * Describes a field within a message.
 *
 * @generated from protobuf message google.protobuf.FieldDescriptorProto
 */
export interface FieldDescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: optional int32 number = 3;
     */
    number?: number;
    /**
     * @generated from protobuf field: optional google.protobuf.FieldDescriptorProto.Label label = 4;
     */
    label?: FieldDescriptorProto_Label;
    /**
     * If type_name is set, this need not be set.  If both this and type_name
     * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
     *
     * @generated from protobuf field: optional google.protobuf.FieldDescriptorProto.Type type = 5;
     */
    type?: FieldDescriptorProto_Type;
    /**
     * For message and enum types, this is the name of the type.  If the name
     * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
     * rules are used to find the type (i.e. first the nested types within this
     * message are searched, then within the parent, on up to the root
     * namespace).
     *
     * @generated from protobuf field: optional string type_name = 6;
     */
    typeName?: string;
    /**
     * For extensions, this is the name of the type being extended.  It is
     * resolved in the same manner as type_name.
     *
     * @generated from protobuf field: optional string extendee = 2;
     */
    extendee?: string;
    /**
     * For numeric types, contains the original text representation of the value.
     * For booleans, "true" or "false".
     * For strings, contains the default text contents (not escaped in any way).
     * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
     *
     * @generated from protobuf field: optional string default_value = 7;
     */
    defaultValue?: string;
    /**
     * If set, gives the index of a oneof in the containing type's oneof_decl
     * list.  This field is a member of that oneof.
     *
     * @generated from protobuf field: optional int32 oneof_index = 9;
     */
    oneofIndex?: number;
    /**
     * JSON name of this field. The value is set by protocol compiler. If the
     * user has set a "json_name" option on this field, that option's value
     * will be used. Otherwise, it's deduced from the field's name by converting
     * it to camelCase.
     *
     * @generated from protobuf field: optional string json_name = 10;
     */
    jsonName?: string;
    /**
     * @generated from protobuf field: optional google.protobuf.FieldOptions options = 8;
     */
    options?: FieldOptions;
    /**
     * If true, this is a proto3 "optional". When a proto3 field is optional, it
     * tracks presence regardless of field type.
     *
     * When proto3_optional is true, this field must belong to a oneof to signal
     * to old proto3 clients that presence is tracked for this field. This oneof
     * is known as a "synthetic" oneof, and this field must be its sole member
     * (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs
     * exist in the descriptor only, and do not generate any API. Synthetic oneofs
     * must be ordered after all "real" oneofs.
     *
     * For message fields, proto3_optional doesn't create any semantic change,
     * since non-repeated message fields always track presence. However it still
     * indicates the semantic detail of whether the user wrote "optional" or not.
     * This can be useful for round-tripping the .proto file. For consistency we
     * give message fields a synthetic oneof also, even though it is not required
     * to track presence. This is especially important because the parser can't
     * tell if a field is a message or an enum, so it must always create a
     * synthetic oneof.
     *
     * Proto2 optional fields do not set this flag, because they already indicate
     * optional with `LABEL_OPTIONAL`.
     *
     * @generated from protobuf field: optional bool proto3_optional = 17;
     */
    proto3Optional?: boolean;
}
/**
 * @generated from protobuf enum google.protobuf.FieldDescriptorProto.Type
 */
export declare enum FieldDescriptorProto_Type {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    UNSPECIFIED$ = 0,
    /**
     * 0 is reserved for errors.
     * Order is weird for historical reasons.
     *
     * @generated from protobuf enum value: TYPE_DOUBLE = 1;
     */
    DOUBLE = 1,
    /**
     * @generated from protobuf enum value: TYPE_FLOAT = 2;
     */
    FLOAT = 2,
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     *
     * @generated from protobuf enum value: TYPE_INT64 = 3;
     */
    INT64 = 3,
    /**
     * @generated from protobuf enum value: TYPE_UINT64 = 4;
     */
    UINT64 = 4,
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     *
     * @generated from protobuf enum value: TYPE_INT32 = 5;
     */
    INT32 = 5,
    /**
     * @generated from protobuf enum value: TYPE_FIXED64 = 6;
     */
    FIXED64 = 6,
    /**
     * @generated from protobuf enum value: TYPE_FIXED32 = 7;
     */
    FIXED32 = 7,
    /**
     * @generated from protobuf enum value: TYPE_BOOL = 8;
     */
    BOOL = 8,
    /**
     * @generated from protobuf enum value: TYPE_STRING = 9;
     */
    STRING = 9,
    /**
     * Tag-delimited aggregate.
     * Group type is deprecated and not supported after google.protobuf. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.  In Editions, the group wire format
     * can be enabled via the `message_encoding` feature.
     *
     * @generated from protobuf enum value: TYPE_GROUP = 10;
     */
    GROUP = 10,
    /**
     * Length-delimited aggregate.
     *
     * @generated from protobuf enum value: TYPE_MESSAGE = 11;
     */
    MESSAGE = 11,
    /**
     * New in version 2.
     *
     * @generated from protobuf enum value: TYPE_BYTES = 12;
     */
    BYTES = 12,
    /**
     * @generated from protobuf enum value: TYPE_UINT32 = 13;
     */
    UINT32 = 13,
    /**
     * @generated from protobuf enum value: TYPE_ENUM = 14;
     */
    ENUM = 14,
    /**
     * @generated from protobuf enum value: TYPE_SFIXED32 = 15;
     */
    SFIXED32 = 15,
    /**
     * @generated from protobuf enum value: TYPE_SFIXED64 = 16;
     */
    SFIXED64 = 16,
    /**
     * Uses ZigZag encoding.
     *
     * @generated from protobuf enum value: TYPE_SINT32 = 17;
     */
    SINT32 = 17,
    /**
     * Uses ZigZag encoding.
     *
     * @generated from protobuf enum value: TYPE_SINT64 = 18;
     */
    SINT64 = 18
}
/**
 * @generated from protobuf enum google.protobuf.FieldDescriptorProto.Label
 */
export declare enum FieldDescriptorProto_Label {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    UNSPECIFIED$ = 0,
    /**
     * 0 is reserved for errors
     *
     * @generated from protobuf enum value: LABEL_OPTIONAL = 1;
     */
    OPTIONAL = 1,
    /**
     * @generated from protobuf enum value: LABEL_REPEATED = 3;
     */
    REPEATED = 3,
    /**
     * The required label is only allowed in google.protobuf.  In proto3 and Editions
     * it's explicitly prohibited.  In Editions, the `field_presence` feature
     * can be used to get this behavior.
     *
     * @generated from protobuf enum value: LABEL_REQUIRED = 2;
     */
    REQUIRED = 2
}
/**
 * Describes a oneof.
 *
 * @generated from protobuf message google.protobuf.OneofDescriptorProto
 */
export interface OneofDescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: optional google.protobuf.OneofOptions options = 2;
     */
    options?: OneofOptions;
}
/**
 * Describes an enum type.
 *
 * @generated from protobuf message google.protobuf.EnumDescriptorProto
 */
export interface EnumDescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: repeated google.protobuf.EnumValueDescriptorProto value = 2;
     */
    value: EnumValueDescriptorProto[];
    /**
     * @generated from protobuf field: optional google.protobuf.EnumOptions options = 3;
     */
    options?: EnumOptions;
    /**
     * Range of reserved numeric values. Reserved numeric values may not be used
     * by enum values in the same enum declaration. Reserved ranges may not
     * overlap.
     *
     * @generated from protobuf field: repeated google.protobuf.EnumDescriptorProto.EnumReservedRange reserved_range = 4;
     */
    reservedRange: EnumDescriptorProto_EnumReservedRange[];
    /**
     * Reserved enum value names, which may not be reused. A given name may only
     * be reserved once.
     *
     * @generated from protobuf field: repeated string reserved_name = 5;
     */
    reservedName: string[];
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 *
 * @generated from protobuf message google.protobuf.EnumDescriptorProto.EnumReservedRange
 */
export interface EnumDescriptorProto_EnumReservedRange {
    /**
     * @generated from protobuf field: optional int32 start = 1;
     */
    start?: number;
    /**
     * @generated from protobuf field: optional int32 end = 2;
     */
    end?: number;
}
/**
 * Describes a value within an enum.
 *
 * @generated from protobuf message google.protobuf.EnumValueDescriptorProto
 */
export interface EnumValueDescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: optional int32 number = 2;
     */
    number?: number;
    /**
     * @generated from protobuf field: optional google.protobuf.EnumValueOptions options = 3;
     */
    options?: EnumValueOptions;
}
/**
 * Describes a service.
 *
 * @generated from protobuf message google.protobuf.ServiceDescriptorProto
 */
export interface ServiceDescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: repeated google.protobuf.MethodDescriptorProto method = 2;
     */
    method: MethodDescriptorProto[];
    /**
     * @generated from protobuf field: optional google.protobuf.ServiceOptions options = 3;
     */
    options?: ServiceOptions;
}
/**
 * Describes a method of a service.
 *
 * @generated from protobuf message google.protobuf.MethodDescriptorProto
 */
export interface MethodDescriptorProto {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * Input and output type names.  These are resolved in the same way as
     * FieldDescriptorProto.type_name, but must refer to a message type.
     *
     * @generated from protobuf field: optional string input_type = 2;
     */
    inputType?: string;
    /**
     * @generated from protobuf field: optional string output_type = 3;
     */
    outputType?: string;
    /**
     * @generated from protobuf field: optional google.protobuf.MethodOptions options = 4;
     */
    options?: MethodOptions;
    /**
     * Identifies if client streams multiple client messages
     *
     * @generated from protobuf field: optional bool client_streaming = 5;
     */
    clientStreaming?: boolean;
    /**
     * Identifies if server streams multiple server messages
     *
     * @generated from protobuf field: optional bool server_streaming = 6;
     */
    serverStreaming?: boolean;
}
/**
 * @generated from protobuf message google.protobuf.FileOptions
 */
export interface FileOptions {
    /**
     * Sets the Java package where classes generated from this .proto will be
     * placed.  By default, the proto package is used, but this is often
     * inappropriate because proto packages do not normally start with backwards
     * domain names.
     *
     * @generated from protobuf field: optional string java_package = 1;
     */
    javaPackage?: string;
    /**
     * Controls the name of the wrapper Java class generated for the .proto file.
     * That class will always contain the .proto file's getDescriptor() method as
     * well as any top-level extensions defined in the .proto file.
     * If java_multiple_files is disabled, then all the other classes from the
     * .proto file will be nested inside the single wrapper outer class.
     *
     * @generated from protobuf field: optional string java_outer_classname = 8;
     */
    javaOuterClassname?: string;
    /**
     * If enabled, then the Java code generator will generate a separate .java
     * file for each top-level message, enum, and service defined in the .proto
     * file.  Thus, these types will *not* be nested inside the wrapper class
     * named by java_outer_classname.  However, the wrapper class will still be
     * generated to contain the file's getDescriptor() method as well as any
     * top-level extensions defined in the file.
     *
     * @generated from protobuf field: optional bool java_multiple_files = 10;
     */
    javaMultipleFiles?: boolean;
    /**
     * This option does nothing.
     *
     * @deprecated
     * @generated from protobuf field: optional bool java_generate_equals_and_hash = 20 [deprecated = true];
     */
    javaGenerateEqualsAndHash?: boolean;
    /**
     * A proto2 file can set this to true to opt in to UTF-8 checking for Java,
     * which will throw an exception if invalid UTF-8 is parsed from the wire or
     * assigned to a string field.
     *
     * TODO: clarify exactly what kinds of field types this option
     * applies to, and update these docs accordingly.
     *
     * Proto3 files already perform these checks. Setting the option explicitly to
     * false has no effect: it cannot be used to opt proto3 files out of UTF-8
     * checks.
     *
     * @generated from protobuf field: optional bool java_string_check_utf8 = 27;
     */
    javaStringCheckUtf8?: boolean;
    /**
     * @generated from protobuf field: optional google.protobuf.FileOptions.OptimizeMode optimize_for = 9;
     */
    optimizeFor?: FileOptions_OptimizeMode;
    /**
     * Sets the Go package where structs generated from this .proto will be
     * placed. If omitted, the Go package will be derived from the following:
     *   - The basename of the package import path, if provided.
     *   - Otherwise, the package statement in the .proto file, if present.
     *   - Otherwise, the basename of the .proto file, without extension.
     *
     * @generated from protobuf field: optional string go_package = 11;
     */
    goPackage?: string;
    /**
     * Should generic services be generated in each language?  "Generic" services
     * are not specific to any particular RPC system.  They are generated by the
     * main code generators in each language (without additional plugins).
     * Generic services were the only kind of service generation supported by
     * early versions of google.protobuf.
     *
     * Generic services are now considered deprecated in favor of using plugins
     * that generate code specific to your particular RPC system.  Therefore,
     * these default to false.  Old code which depends on generic services should
     * explicitly set them to true.
     *
     * @generated from protobuf field: optional bool cc_generic_services = 16;
     */
    ccGenericServices?: boolean;
    /**
     * @generated from protobuf field: optional bool java_generic_services = 17;
     */
    javaGenericServices?: boolean;
    /**
     * @generated from protobuf field: optional bool py_generic_services = 18;
     */
    pyGenericServices?: boolean;
    /**
     * Is this file deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for everything in the file, or it will be completely ignored; in the very
     * least, this is a formalization for deprecating files.
     *
     * @generated from protobuf field: optional bool deprecated = 23;
     */
    deprecated?: boolean;
    /**
     * Enables the use of arenas for the proto messages in this file. This applies
     * only to generated classes for C++.
     *
     * @generated from protobuf field: optional bool cc_enable_arenas = 31;
     */
    ccEnableArenas?: boolean;
    /**
     * Sets the objective c class prefix which is prepended to all objective c
     * generated classes from this .proto. There is no default.
     *
     * @generated from protobuf field: optional string objc_class_prefix = 36;
     */
    objcClassPrefix?: string;
    /**
     * Namespace for generated classes; defaults to the package.
     *
     * @generated from protobuf field: optional string csharp_namespace = 37;
     */
    csharpNamespace?: string;
    /**
     * By default Swift generators will take the proto package and CamelCase it
     * replacing '.' with underscore and use that to prefix the types/symbols
     * defined. When this options is provided, they will use this value instead
     * to prefix the types/symbols defined.
     *
     * @generated from protobuf field: optional string swift_prefix = 39;
     */
    swiftPrefix?: string;
    /**
     * Sets the php class prefix which is prepended to all php generated classes
     * from this .proto. Default is empty.
     *
     * @generated from protobuf field: optional string php_class_prefix = 40;
     */
    phpClassPrefix?: string;
    /**
     * Use this option to change the namespace of php generated classes. Default
     * is empty. When this option is empty, the package name will be used for
     * determining the namespace.
     *
     * @generated from protobuf field: optional string php_namespace = 41;
     */
    phpNamespace?: string;
    /**
     * Use this option to change the namespace of php generated metadata classes.
     * Default is empty. When this option is empty, the proto file name will be
     * used for determining the namespace.
     *
     * @generated from protobuf field: optional string php_metadata_namespace = 44;
     */
    phpMetadataNamespace?: string;
    /**
     * Use this option to change the package of ruby generated classes. Default
     * is empty. When this option is not set, the package name will be used for
     * determining the ruby package.
     *
     * @generated from protobuf field: optional string ruby_package = 45;
     */
    rubyPackage?: string;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 50;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here.
     * See the documentation for the "Options" section above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * Generated classes can be optimized for speed or code size.
 *
 * @generated from protobuf enum google.protobuf.FileOptions.OptimizeMode
 */
export declare enum FileOptions_OptimizeMode {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    UNSPECIFIED$ = 0,
    /**
     * Generate complete code for parsing, serialization,
     *
     * @generated from protobuf enum value: SPEED = 1;
     */
    SPEED = 1,
    /**
     * etc.
     *
     * Use ReflectionOps to implement these methods.
     *
     * @generated from protobuf enum value: CODE_SIZE = 2;
     */
    CODE_SIZE = 2,
    /**
     * Generate code using MessageLite and the lite runtime.
     *
     * @generated from protobuf enum value: LITE_RUNTIME = 3;
     */
    LITE_RUNTIME = 3
}
/**
 * @generated from protobuf message google.protobuf.MessageOptions
 */
export interface MessageOptions {
    /**
     * Set true to use the old proto1 MessageSet wire format for extensions.
     * This is provided for backwards-compatibility with the MessageSet wire
     * format.  You should not use this for any other reason:  It's less
     * efficient, has fewer features, and is more complicated.
     *
     * The message must be defined exactly as follows:
     *   message Foo {
     *     option message_set_wire_format = true;
     *     extensions 4 to max;
     *   }
     * Note that the message cannot have any defined fields; MessageSets only
     * have extensions.
     *
     * All extensions of your type must be singular messages; e.g. they cannot
     * be int32s, enums, or repeated messages.
     *
     * Because this is an option, the above two restrictions are not enforced by
     * the protocol compiler.
     *
     * @generated from protobuf field: optional bool message_set_wire_format = 1;
     */
    messageSetWireFormat?: boolean;
    /**
     * Disables the generation of the standard "descriptor()" accessor, which can
     * conflict with a field of the same name.  This is meant to make migration
     * from proto1 easier; new code should avoid fields named "descriptor".
     *
     * @generated from protobuf field: optional bool no_standard_descriptor_accessor = 2;
     */
    noStandardDescriptorAccessor?: boolean;
    /**
     * Is this message deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the message, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating messages.
     *
     * @generated from protobuf field: optional bool deprecated = 3;
     */
    deprecated?: boolean;
    /**
     * Whether the message is an automatically generated map entry type for the
     * maps field.
     *
     * For maps fields:
     *     map<KeyType, ValueType> map_field = 1;
     * The parsed descriptor looks like:
     *     message MapFieldEntry {
     *         option map_entry = true;
     *         optional KeyType key = 1;
     *         optional ValueType value = 2;
     *     }
     *     repeated MapFieldEntry map_field = 1;
     *
     * Implementations may choose not to generate the map_entry=true message, but
     * use a native map in the target language to hold the keys and values.
     * The reflection APIs in such implementations still need to work as
     * if the field is a repeated message field.
     *
     * NOTE: Do not set the option in .proto files. Always use the maps syntax
     * instead. The option should only be implicitly set by the proto compiler
     * parser.
     *
     * @generated from protobuf field: optional bool map_entry = 7;
     */
    mapEntry?: boolean;
    /**
     * Enable the legacy handling of JSON field name conflicts.  This lowercases
     * and strips underscored from the fields before comparison in proto3 only.
     * The new behavior takes `json_name` into account and applies to proto2 as
     * well.
     *
     * This should only be used as a temporary measure against broken builds due
     * to the change in behavior for JSON field name conflicts.
     *
     * TODO This is legacy behavior we plan to remove once downstream
     * teams have had time to migrate.
     *
     * @deprecated
     * @generated from protobuf field: optional bool deprecated_legacy_json_field_conflicts = 11 [deprecated = true];
     */
    deprecatedLegacyJsonFieldConflicts?: boolean;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 12;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @generated from protobuf message google.protobuf.FieldOptions
 */
export interface FieldOptions {
    /**
     * The ctype option instructs the C++ code generator to use a different
     * representation of the field than it normally would.  See the specific
     * options below.  This option is only implemented to support use of
     * [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
     * type "bytes" in the open source release -- sorry, we'll try to include
     * other types in a future version!
     *
     * @generated from protobuf field: optional google.protobuf.FieldOptions.CType ctype = 1;
     */
    ctype?: FieldOptions_CType;
    /**
     * The packed option can be enabled for repeated primitive fields to enable
     * a more efficient representation on the wire. Rather than repeatedly
     * writing the tag and type for each element, the entire array is encoded as
     * a single length-delimited blob. In proto3, only explicit setting it to
     * false will avoid using packed encoding.  This option is prohibited in
     * Editions, but the `repeated_field_encoding` feature can be used to control
     * the behavior.
     *
     * @generated from protobuf field: optional bool packed = 2;
     */
    packed?: boolean;
    /**
     * The jstype option determines the JavaScript type used for values of the
     * field.  The option is permitted only for 64 bit integral and fixed types
     * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
     * is represented as JavaScript string, which avoids loss of precision that
     * can happen when a large value is converted to a floating point JavaScript.
     * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
     * use the JavaScript "number" type.  The behavior of the default option
     * JS_NORMAL is implementation dependent.
     *
     * This option is an enum to permit additional types to be added, e.g.
     * goog.math.Integer.
     *
     * @generated from protobuf field: optional google.protobuf.FieldOptions.JSType jstype = 6;
     */
    jstype?: FieldOptions_JSType;
    /**
     * Should this field be parsed lazily?  Lazy applies only to message-type
     * fields.  It means that when the outer message is initially parsed, the
     * inner message's contents will not be parsed but instead stored in encoded
     * form.  The inner message will actually be parsed when it is first accessed.
     *
     * This is only a hint.  Implementations are free to choose whether to use
     * eager or lazy parsing regardless of the value of this option.  However,
     * setting this option true suggests that the protocol author believes that
     * using lazy parsing on this field is worth the additional bookkeeping
     * overhead typically needed to implement it.
     *
     * This option does not affect the public interface of any generated code;
     * all method signatures remain the same.  Furthermore, thread-safety of the
     * interface is not affected by this option; const methods remain safe to
     * call from multiple threads concurrently, while non-const methods continue
     * to require exclusive access.
     *
     * Note that lazy message fields are still eagerly verified to check
     * ill-formed wireformat or missing required fields. Calling IsInitialized()
     * on the outer message would fail if the inner message has missing required
     * fields. Failed verification would result in parsing failure (except when
     * uninitialized messages are acceptable).
     *
     * @generated from protobuf field: optional bool lazy = 5;
     */
    lazy?: boolean;
    /**
     * unverified_lazy does no correctness checks on the byte stream. This should
     * only be used where lazy with verification is prohibitive for performance
     * reasons.
     *
     * @generated from protobuf field: optional bool unverified_lazy = 15;
     */
    unverifiedLazy?: boolean;
    /**
     * Is this field deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for accessors, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating fields.
     *
     * @generated from protobuf field: optional bool deprecated = 3;
     */
    deprecated?: boolean;
    /**
     * For Google-internal migration only. Do not use.
     *
     * @generated from protobuf field: optional bool weak = 10;
     */
    weak?: boolean;
    /**
     * Indicate that the field value should not be printed out when using debug
     * formats, e.g. when the field contains sensitive credentials.
     *
     * @generated from protobuf field: optional bool debug_redact = 16;
     */
    debugRedact?: boolean;
    /**
     * @generated from protobuf field: optional google.protobuf.FieldOptions.OptionRetention retention = 17;
     */
    retention?: FieldOptions_OptionRetention;
    /**
     * @generated from protobuf field: repeated google.protobuf.FieldOptions.OptionTargetType targets = 19;
     */
    targets: FieldOptions_OptionTargetType[];
    /**
     * @generated from protobuf field: repeated google.protobuf.FieldOptions.EditionDefault edition_defaults = 20;
     */
    editionDefaults: FieldOptions_EditionDefault[];
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 21;
     */
    features?: FeatureSet;
    /**
     * @generated from protobuf field: optional google.protobuf.FieldOptions.FeatureSupport feature_support = 22;
     */
    featureSupport?: FieldOptions_FeatureSupport;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @generated from protobuf message google.protobuf.FieldOptions.EditionDefault
 */
export interface FieldOptions_EditionDefault {
    /**
     * @generated from protobuf field: optional google.protobuf.Edition edition = 3;
     */
    edition?: Edition;
    /**
     * @generated from protobuf field: optional string value = 2;
     */
    value?: string;
}
/**
 * Information about the support window of a feature.
 *
 * @generated from protobuf message google.protobuf.FieldOptions.FeatureSupport
 */
export interface FieldOptions_FeatureSupport {
    /**
     * The edition that this feature was first available in.  In editions
     * earlier than this one, the default assigned to EDITION_LEGACY will be
     * used, and proto files will not be able to override it.
     *
     * @generated from protobuf field: optional google.protobuf.Edition edition_introduced = 1;
     */
    editionIntroduced?: Edition;
    /**
     * The edition this feature becomes deprecated in.  Using this after this
     * edition may trigger warnings.
     *
     * @generated from protobuf field: optional google.protobuf.Edition edition_deprecated = 2;
     */
    editionDeprecated?: Edition;
    /**
     * The deprecation warning text if this feature is used after the edition it
     * was marked deprecated in.
     *
     * @generated from protobuf field: optional string deprecation_warning = 3;
     */
    deprecationWarning?: string;
    /**
     * The edition this feature is no longer available in.  In editions after
     * this one, the last default assigned will be used, and proto files will
     * not be able to override it.
     *
     * @generated from protobuf field: optional google.protobuf.Edition edition_removed = 4;
     */
    editionRemoved?: Edition;
}
/**
 * @generated from protobuf enum google.protobuf.FieldOptions.CType
 */
export declare enum FieldOptions_CType {
    /**
     * Default mode.
     *
     * @generated from protobuf enum value: STRING = 0;
     */
    STRING = 0,
    /**
     * The option [ctype=CORD] may be applied to a non-repeated field of type
     * "bytes". It indicates that in C++, the data should be stored in a Cord
     * instead of a string.  For very large strings, this may reduce memory
     * fragmentation. It may also allow better performance when parsing from a
     * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
     * alias the original buffer.
     *
     * @generated from protobuf enum value: CORD = 1;
     */
    CORD = 1,
    /**
     * @generated from protobuf enum value: STRING_PIECE = 2;
     */
    STRING_PIECE = 2
}
/**
 * @generated from protobuf enum google.protobuf.FieldOptions.JSType
 */
export declare enum FieldOptions_JSType {
    /**
     * Use the default type.
     *
     * @generated from protobuf enum value: JS_NORMAL = 0;
     */
    JS_NORMAL = 0,
    /**
     * Use JavaScript strings.
     *
     * @generated from protobuf enum value: JS_STRING = 1;
     */
    JS_STRING = 1,
    /**
     * Use JavaScript numbers.
     *
     * @generated from protobuf enum value: JS_NUMBER = 2;
     */
    JS_NUMBER = 2
}
/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 *
 * @generated from protobuf enum google.protobuf.FieldOptions.OptionRetention
 */
export declare enum FieldOptions_OptionRetention {
    /**
     * @generated from protobuf enum value: RETENTION_UNKNOWN = 0;
     */
    RETENTION_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: RETENTION_RUNTIME = 1;
     */
    RETENTION_RUNTIME = 1,
    /**
     * @generated from protobuf enum value: RETENTION_SOURCE = 2;
     */
    RETENTION_SOURCE = 2
}
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 *
 * @generated from protobuf enum google.protobuf.FieldOptions.OptionTargetType
 */
export declare enum FieldOptions_OptionTargetType {
    /**
     * @generated from protobuf enum value: TARGET_TYPE_UNKNOWN = 0;
     */
    TARGET_TYPE_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_FILE = 1;
     */
    TARGET_TYPE_FILE = 1,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_EXTENSION_RANGE = 2;
     */
    TARGET_TYPE_EXTENSION_RANGE = 2,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_MESSAGE = 3;
     */
    TARGET_TYPE_MESSAGE = 3,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_FIELD = 4;
     */
    TARGET_TYPE_FIELD = 4,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_ONEOF = 5;
     */
    TARGET_TYPE_ONEOF = 5,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_ENUM = 6;
     */
    TARGET_TYPE_ENUM = 6,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_ENUM_ENTRY = 7;
     */
    TARGET_TYPE_ENUM_ENTRY = 7,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_SERVICE = 8;
     */
    TARGET_TYPE_SERVICE = 8,
    /**
     * @generated from protobuf enum value: TARGET_TYPE_METHOD = 9;
     */
    TARGET_TYPE_METHOD = 9
}
/**
 * @generated from protobuf message google.protobuf.OneofOptions
 */
export interface OneofOptions {
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 1;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @generated from protobuf message google.protobuf.EnumOptions
 */
export interface EnumOptions {
    /**
     * Set this option to true to allow mapping different tag names to the same
     * value.
     *
     * @generated from protobuf field: optional bool allow_alias = 2;
     */
    allowAlias?: boolean;
    /**
     * Is this enum deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating enums.
     *
     * @generated from protobuf field: optional bool deprecated = 3;
     */
    deprecated?: boolean;
    /**
     * Enable the legacy handling of JSON field name conflicts.  This lowercases
     * and strips underscored from the fields before comparison in proto3 only.
     * The new behavior takes `json_name` into account and applies to proto2 as
     * well.
     * TODO Remove this legacy behavior once downstream teams have
     * had time to migrate.
     *
     * @deprecated
     * @generated from protobuf field: optional bool deprecated_legacy_json_field_conflicts = 6 [deprecated = true];
     */
    deprecatedLegacyJsonFieldConflicts?: boolean;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 7;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @generated from protobuf message google.protobuf.EnumValueOptions
 */
export interface EnumValueOptions {
    /**
     * Is this enum value deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum value, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating enum values.
     *
     * @generated from protobuf field: optional bool deprecated = 1;
     */
    deprecated?: boolean;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 2;
     */
    features?: FeatureSet;
    /**
     * Indicate that fields annotated with this enum value should not be printed
     * out when using debug formats, e.g. when the field contains sensitive
     * credentials.
     *
     * @generated from protobuf field: optional bool debug_redact = 3;
     */
    debugRedact?: boolean;
    /**
     * Information about the support window of a feature value.
     *
     * @generated from protobuf field: optional google.protobuf.FieldOptions.FeatureSupport feature_support = 4;
     */
    featureSupport?: FieldOptions_FeatureSupport;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @generated from protobuf message google.protobuf.ServiceOptions
 */
export interface ServiceOptions {
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 34;
     */
    features?: FeatureSet;
    /**
     * Is this service deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the service, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating services.
     *
     * @generated from protobuf field: optional bool deprecated = 33;
     */
    deprecated?: boolean;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @generated from protobuf message google.protobuf.MethodOptions
 */
export interface MethodOptions {
    /**
     * Is this method deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the method, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating methods.
     *
     * @generated from protobuf field: optional bool deprecated = 33;
     */
    deprecated?: boolean;
    /**
     * @generated from protobuf field: optional google.protobuf.MethodOptions.IdempotencyLevel idempotency_level = 34;
     */
    idempotencyLevel?: MethodOptions_IdempotencyLevel;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet features = 35;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 *
 * @generated from protobuf enum google.protobuf.MethodOptions.IdempotencyLevel
 */
export declare enum MethodOptions_IdempotencyLevel {
    /**
     * @generated from protobuf enum value: IDEMPOTENCY_UNKNOWN = 0;
     */
    IDEMPOTENCY_UNKNOWN = 0,
    /**
     * implies idempotent
     *
     * @generated from protobuf enum value: NO_SIDE_EFFECTS = 1;
     */
    NO_SIDE_EFFECTS = 1,
    /**
     * idempotent, but may have side effects
     *
     * @generated from protobuf enum value: IDEMPOTENT = 2;
     */
    IDEMPOTENT = 2
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 *
 * @generated from protobuf message google.protobuf.UninterpretedOption
 */
export interface UninterpretedOption {
    /**
     * @generated from protobuf field: repeated google.protobuf.UninterpretedOption.NamePart name = 2;
     */
    name: UninterpretedOption_NamePart[];
    /**
     * The value of the uninterpreted option, in whatever type the tokenizer
     * identified it as during parsing. Exactly one of these should be set.
     *
     * @generated from protobuf field: optional string identifier_value = 3;
     */
    identifierValue?: string;
    /**
     * @generated from protobuf field: optional uint64 positive_int_value = 4;
     */
    positiveIntValue?: bigint;
    /**
     * @generated from protobuf field: optional int64 negative_int_value = 5;
     */
    negativeIntValue?: bigint;
    /**
     * @generated from protobuf field: optional double double_value = 6;
     */
    doubleValue?: number;
    /**
     * @generated from protobuf field: optional bytes string_value = 7;
     */
    stringValue?: Uint8Array;
    /**
     * @generated from protobuf field: optional string aggregate_value = 8;
     */
    aggregateValue?: string;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 *
 * @generated from protobuf message google.protobuf.UninterpretedOption.NamePart
 */
export interface UninterpretedOption_NamePart {
    /**
     * @generated from protobuf field: string name_part = 1;
     */
    namePart: string;
    /**
     * @generated from protobuf field: bool is_extension = 2;
     */
    isExtension: boolean;
}
/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 *
 * @generated from protobuf message google.protobuf.FeatureSet
 */
export interface FeatureSet {
    /**
     * @generated from protobuf field: optional google.protobuf.FeatureSet.FieldPresence field_presence = 1;
     */
    fieldPresence?: FeatureSet_FieldPresence;
    /**
     * @generated from protobuf field: optional google.protobuf.FeatureSet.EnumType enum_type = 2;
     */
    enumType?: FeatureSet_EnumType;
    /**
     * @generated from protobuf field: optional google.protobuf.FeatureSet.RepeatedFieldEncoding repeated_field_encoding = 3;
     */
    repeatedFieldEncoding?: FeatureSet_RepeatedFieldEncoding;
    /**
     * @generated from protobuf field: optional google.protobuf.FeatureSet.Utf8Validation utf8_validation = 4;
     */
    utf8Validation?: FeatureSet_Utf8Validation;
    /**
     * @generated from protobuf field: optional google.protobuf.FeatureSet.MessageEncoding message_encoding = 5;
     */
    messageEncoding?: FeatureSet_MessageEncoding;
    /**
     * @generated from protobuf field: optional google.protobuf.FeatureSet.JsonFormat json_format = 6;
     */
    jsonFormat?: FeatureSet_JsonFormat;
}
/**
 * @generated from protobuf enum google.protobuf.FeatureSet.FieldPresence
 */
export declare enum FeatureSet_FieldPresence {
    /**
     * @generated from protobuf enum value: FIELD_PRESENCE_UNKNOWN = 0;
     */
    FIELD_PRESENCE_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: EXPLICIT = 1;
     */
    EXPLICIT = 1,
    /**
     * @generated from protobuf enum value: IMPLICIT = 2;
     */
    IMPLICIT = 2,
    /**
     * @generated from protobuf enum value: LEGACY_REQUIRED = 3;
     */
    LEGACY_REQUIRED = 3
}
/**
 * @generated from protobuf enum google.protobuf.FeatureSet.EnumType
 */
export declare enum FeatureSet_EnumType {
    /**
     * @generated from protobuf enum value: ENUM_TYPE_UNKNOWN = 0;
     */
    ENUM_TYPE_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: OPEN = 1;
     */
    OPEN = 1,
    /**
     * @generated from protobuf enum value: CLOSED = 2;
     */
    CLOSED = 2
}
/**
 * @generated from protobuf enum google.protobuf.FeatureSet.RepeatedFieldEncoding
 */
export declare enum FeatureSet_RepeatedFieldEncoding {
    /**
     * @generated from protobuf enum value: REPEATED_FIELD_ENCODING_UNKNOWN = 0;
     */
    REPEATED_FIELD_ENCODING_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: PACKED = 1;
     */
    PACKED = 1,
    /**
     * @generated from protobuf enum value: EXPANDED = 2;
     */
    EXPANDED = 2
}
/**
 * @generated from protobuf enum google.protobuf.FeatureSet.Utf8Validation
 */
export declare enum FeatureSet_Utf8Validation {
    /**
     * @generated from protobuf enum value: UTF8_VALIDATION_UNKNOWN = 0;
     */
    UTF8_VALIDATION_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: VERIFY = 2;
     */
    VERIFY = 2,
    /**
     * @generated from protobuf enum value: NONE = 3;
     */
    NONE = 3
}
/**
 * @generated from protobuf enum google.protobuf.FeatureSet.MessageEncoding
 */
export declare enum FeatureSet_MessageEncoding {
    /**
     * @generated from protobuf enum value: MESSAGE_ENCODING_UNKNOWN = 0;
     */
    MESSAGE_ENCODING_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: LENGTH_PREFIXED = 1;
     */
    LENGTH_PREFIXED = 1,
    /**
     * @generated from protobuf enum value: DELIMITED = 2;
     */
    DELIMITED = 2
}
/**
 * @generated from protobuf enum google.protobuf.FeatureSet.JsonFormat
 */
export declare enum FeatureSet_JsonFormat {
    /**
     * @generated from protobuf enum value: JSON_FORMAT_UNKNOWN = 0;
     */
    JSON_FORMAT_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: ALLOW = 1;
     */
    ALLOW = 1,
    /**
     * @generated from protobuf enum value: LEGACY_BEST_EFFORT = 2;
     */
    LEGACY_BEST_EFFORT = 2
}
/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 *
 * @generated from protobuf message google.protobuf.FeatureSetDefaults
 */
export interface FeatureSetDefaults {
    /**
     * @generated from protobuf field: repeated google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault defaults = 1;
     */
    defaults: FeatureSetDefaults_FeatureSetEditionDefault[];
    /**
     * The minimum supported edition (inclusive) when this was constructed.
     * Editions before this will not have defaults.
     *
     * @generated from protobuf field: optional google.protobuf.Edition minimum_edition = 4;
     */
    minimumEdition?: Edition;
    /**
     * The maximum known edition (inclusive) when this was constructed. Editions
     * after this will not have reliable defaults.
     *
     * @generated from protobuf field: optional google.protobuf.Edition maximum_edition = 5;
     */
    maximumEdition?: Edition;
}
/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 *
 * @generated from protobuf message google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
 */
export interface FeatureSetDefaults_FeatureSetEditionDefault {
    /**
     * @generated from protobuf field: optional google.protobuf.Edition edition = 3;
     */
    edition?: Edition;
    /**
     * Defaults of features that can be overridden in this edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet overridable_features = 4;
     */
    overridableFeatures?: FeatureSet;
    /**
     * Defaults of features that can't be overridden in this edition.
     *
     * @generated from protobuf field: optional google.protobuf.FeatureSet fixed_features = 5;
     */
    fixedFeatures?: FeatureSet;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 *
 * @generated from protobuf message google.protobuf.SourceCodeInfo
 */
export interface SourceCodeInfo {
    /**
     * A Location identifies a piece of source code in a .proto file which
     * corresponds to a particular definition.  This information is intended
     * to be useful to IDEs, code indexers, documentation generators, and similar
     * tools.
     *
     * For example, say we have a file like:
     *   message Foo {
     *     optional string foo = 1;
     *   }
     * Let's look at just the field definition:
     *   optional string foo = 1;
     *   ^       ^^     ^^  ^  ^^^
     *   a       bc     de  f  ghi
     * We have the following locations:
     *   span   path               represents
     *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
     *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
     *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
     *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
     *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
     *
     * Notes:
     * - A location may refer to a repeated field itself (i.e. not to any
     *   particular index within it).  This is used whenever a set of elements are
     *   logically enclosed in a single code segment.  For example, an entire
     *   extend block (possibly containing multiple extension definitions) will
     *   have an outer location whose path refers to the "extensions" repeated
     *   field without an index.
     * - Multiple locations may have the same path.  This happens when a single
     *   logical declaration is spread out across multiple places.  The most
     *   obvious example is the "extend" block again -- there may be multiple
     *   extend blocks in the same scope, each of which will have the same path.
     * - A location's span is not always a subset of its parent's span.  For
     *   example, the "extendee" of an extension declaration appears at the
     *   beginning of the "extend" block and is shared by all extensions within
     *   the block.
     * - Just because a location's span is a subset of some other location's span
     *   does not mean that it is a descendant.  For example, a "group" defines
     *   both a type and a field in a single declaration.  Thus, the locations
     *   corresponding to the type and field and their components will overlap.
     * - Code which tries to interpret locations should probably be designed to
     *   ignore those that it doesn't understand, as more types of locations could
     *   be recorded in the future.
     *
     * @generated from protobuf field: repeated google.protobuf.SourceCodeInfo.Location location = 1;
     */
    location: SourceCodeInfo_Location[];
}
/**
 * @generated from protobuf message google.protobuf.SourceCodeInfo.Location
 */
export interface SourceCodeInfo_Location {
    /**
     * Identifies which part of the FileDescriptorProto was defined at this
     * location.
     *
     * Each element is a field number or an index.  They form a path from
     * the root FileDescriptorProto to the place where the definition appears.
     * For example, this path:
     *   [ 4, 3, 2, 7, 1 ]
     * refers to:
     *   file.message_type(3)  // 4, 3
     *       .field(7)         // 2, 7
     *       .name()           // 1
     * This is because FileDescriptorProto.message_type has field number 4:
     *   repeated DescriptorProto message_type = 4;
     * and DescriptorProto.field has field number 2:
     *   repeated FieldDescriptorProto field = 2;
     * and FieldDescriptorProto.name has field number 1:
     *   optional string name = 1;
     *
     * Thus, the above path gives the location of a field name.  If we removed
     * the last element:
     *   [ 4, 3, 2, 7 ]
     * this path refers to the whole field declaration (from the beginning
     * of the label to the terminating semicolon).
     *
     * @generated from protobuf field: repeated int32 path = 1 [packed = true];
     */
    path: number[];
    /**
     * Always has exactly three or four elements: start line, start column,
     * end line (optional, otherwise assumed same as start line), end column.
     * These are packed into a single field for efficiency.  Note that line
     * and column numbers are zero-based -- typically you will want to add
     * 1 to each before displaying to a user.
     *
     * @generated from protobuf field: repeated int32 span = 2 [packed = true];
     */
    span: number[];
    /**
     * If this SourceCodeInfo represents a complete declaration, these are any
     * comments appearing before and after the declaration which appear to be
     * attached to the declaration.
     *
     * A series of line comments appearing on consecutive lines, with no other
     * tokens appearing on those lines, will be treated as a single comment.
     *
     * leading_detached_comments will keep paragraphs of comments that appear
     * before (but not connected to) the current element. Each paragraph,
     * separated by empty lines, will be one comment element in the repeated
     * field.
     *
     * Only the comment content is provided; comment markers (e.g. //) are
     * stripped out.  For block comments, leading whitespace and an asterisk
     * will be stripped from the beginning of each line other than the first.
     * Newlines are included in the output.
     *
     * Examples:
     *
     *   optional int32 foo = 1;  // Comment attached to foo.
     *   // Comment attached to bar.
     *   optional int32 bar = 2;
     *
     *   optional string baz = 3;
     *   // Comment attached to baz.
     *   // Another line attached to baz.
     *
     *   // Comment attached to moo.
     *   //
     *   // Another line attached to moo.
     *   optional double moo = 4;
     *
     *   // Detached comment for corge. This is not leading or trailing comments
     *   // to moo or corge because there are blank lines separating it from
     *   // both.
     *
     *   // Detached comment for corge paragraph 2.
     *
     *   optional string corge = 5;
     *   /* Block comment attached
     *    * to corge.  Leading asterisks
     *    * will be removed. *\/
     *   /* Block comment attached to
     *    * grault. *\/
     *   optional int32 grault = 6;
     *
     *   // ignored detached comments.
     *
     * @generated from protobuf field: optional string leading_comments = 3;
     */
    leadingComments?: string;
    /**
     * @generated from protobuf field: optional string trailing_comments = 4;
     */
    trailingComments?: string;
    /**
     * @generated from protobuf field: repeated string leading_detached_comments = 6;
     */
    leadingDetachedComments: string[];
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 *
 * @generated from protobuf message google.protobuf.GeneratedCodeInfo
 */
export interface GeneratedCodeInfo {
    /**
     * An Annotation connects some span of text in generated code to an element
     * of its generating .proto file.
     *
     * @generated from protobuf field: repeated google.protobuf.GeneratedCodeInfo.Annotation annotation = 1;
     */
    annotation: GeneratedCodeInfo_Annotation[];
}
/**
 * @generated from protobuf message google.protobuf.GeneratedCodeInfo.Annotation
 */
export interface GeneratedCodeInfo_Annotation {
    /**
     * Identifies the element in the original source .proto file. This field
     * is formatted the same as SourceCodeInfo.Location.path.
     *
     * @generated from protobuf field: repeated int32 path = 1 [packed = true];
     */
    path: number[];
    /**
     * Identifies the filesystem path to the original source .proto.
     *
     * @generated from protobuf field: optional string source_file = 2;
     */
    sourceFile?: string;
    /**
     * Identifies the starting offset in bytes in the generated code
     * that relates to the identified object.
     *
     * @generated from protobuf field: optional int32 begin = 3;
     */
    begin?: number;
    /**
     * Identifies the ending offset in bytes in the generated code that
     * relates to the identified object. The end offset should be one past
     * the last relevant byte (so the length of the text = end - begin).
     *
     * @generated from protobuf field: optional int32 end = 4;
     */
    end?: number;
    /**
     * @generated from protobuf field: optional google.protobuf.GeneratedCodeInfo.Annotation.Semantic semantic = 5;
     */
    semantic?: GeneratedCodeInfo_Annotation_Semantic;
}
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 *
 * @generated from protobuf enum google.protobuf.GeneratedCodeInfo.Annotation.Semantic
 */
export declare enum GeneratedCodeInfo_Annotation_Semantic {
    /**
     * There is no effect or the effect is indescribable.
     *
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * The element is set or otherwise mutated.
     *
     * @generated from protobuf enum value: SET = 1;
     */
    SET = 1,
    /**
     * An alias to the element is returned.
     *
     * @generated from protobuf enum value: ALIAS = 2;
     */
    ALIAS = 2
}
/**
 * The full set of known editions.
 *
 * @generated from protobuf enum google.protobuf.Edition
 */
export declare enum Edition {
    /**
     * A placeholder for an unknown edition value.
     *
     * @generated from protobuf enum value: EDITION_UNKNOWN = 0;
     */
    EDITION_UNKNOWN = 0,
    /**
     * A placeholder edition for specifying default behaviors *before* a feature
     * was first introduced.  This is effectively an "infinite past".
     *
     * @generated from protobuf enum value: EDITION_LEGACY = 900;
     */
    EDITION_LEGACY = 900,
    /**
     * Legacy syntax "editions".  These pre-date editions, but behave much like
     * distinct editions.  These can't be used to specify the edition of proto
     * files, but feature definitions must supply proto2/proto3 defaults for
     * backwards compatibility.
     *
     * @generated from protobuf enum value: EDITION_PROTO2 = 998;
     */
    EDITION_PROTO2 = 998,
    /**
     * @generated from protobuf enum value: EDITION_PROTO3 = 999;
     */
    EDITION_PROTO3 = 999,
    /**
     * Editions that have been released.  The specific values are arbitrary and
     * should not be depended on, but they will always be time-ordered for easy
     * comparison.
     *
     * @generated from protobuf enum value: EDITION_2023 = 1000;
     */
    EDITION_2023 = 1000,
    /**
     * @generated from protobuf enum value: EDITION_2024 = 1001;
     */
    EDITION_2024 = 1001,
    /**
     * Placeholder editions for testing feature resolution.  These should not be
     * used or relyed on outside of tests.
     *
     * @generated from protobuf enum value: EDITION_1_TEST_ONLY = 1;
     */
    EDITION_1_TEST_ONLY = 1,
    /**
     * @generated from protobuf enum value: EDITION_2_TEST_ONLY = 2;
     */
    EDITION_2_TEST_ONLY = 2,
    /**
     * @generated from protobuf enum value: EDITION_99997_TEST_ONLY = 99997;
     */
    EDITION_99997_TEST_ONLY = 99997,
    /**
     * @generated from protobuf enum value: EDITION_99998_TEST_ONLY = 99998;
     */
    EDITION_99998_TEST_ONLY = 99998,
    /**
     * @generated from protobuf enum value: EDITION_99999_TEST_ONLY = 99999;
     */
    EDITION_99999_TEST_ONLY = 99999,
    /**
     * Placeholder for specifying unbounded edition support.  This should only
     * ever be used by plugins that can expect to never require any changes to
     * support a new edition.
     *
     * @generated from protobuf enum value: EDITION_MAX = 2147483647;
     */
    EDITION_MAX = 2147483647
}
declare class FileDescriptorSet$Type extends MessageType<FileDescriptorSet> {
    constructor();
    create(value?: PartialMessage<FileDescriptorSet>): FileDescriptorSet;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FileDescriptorSet): FileDescriptorSet;
    internalBinaryWrite(message: FileDescriptorSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FileDescriptorSet
 */
export declare const FileDescriptorSet: FileDescriptorSet$Type;
declare class FileDescriptorProto$Type extends MessageType<FileDescriptorProto> {
    constructor();
    create(value?: PartialMessage<FileDescriptorProto>): FileDescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FileDescriptorProto): FileDescriptorProto;
    internalBinaryWrite(message: FileDescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FileDescriptorProto
 */
export declare const FileDescriptorProto: FileDescriptorProto$Type;
declare class DescriptorProto$Type extends MessageType<DescriptorProto> {
    constructor();
    create(value?: PartialMessage<DescriptorProto>): DescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DescriptorProto): DescriptorProto;
    internalBinaryWrite(message: DescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.DescriptorProto
 */
export declare const DescriptorProto: DescriptorProto$Type;
declare class DescriptorProto_ExtensionRange$Type extends MessageType<DescriptorProto_ExtensionRange> {
    constructor();
    create(value?: PartialMessage<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRange;
    internalBinaryWrite(message: DescriptorProto_ExtensionRange, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.DescriptorProto.ExtensionRange
 */
export declare const DescriptorProto_ExtensionRange: DescriptorProto_ExtensionRange$Type;
declare class DescriptorProto_ReservedRange$Type extends MessageType<DescriptorProto_ReservedRange> {
    constructor();
    create(value?: PartialMessage<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DescriptorProto_ReservedRange): DescriptorProto_ReservedRange;
    internalBinaryWrite(message: DescriptorProto_ReservedRange, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.DescriptorProto.ReservedRange
 */
export declare const DescriptorProto_ReservedRange: DescriptorProto_ReservedRange$Type;
declare class ExtensionRangeOptions$Type extends MessageType<ExtensionRangeOptions> {
    constructor();
    create(value?: PartialMessage<ExtensionRangeOptions>): ExtensionRangeOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtensionRangeOptions): ExtensionRangeOptions;
    internalBinaryWrite(message: ExtensionRangeOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.ExtensionRangeOptions
 */
export declare const ExtensionRangeOptions: ExtensionRangeOptions$Type;
declare class ExtensionRangeOptions_Declaration$Type extends MessageType<ExtensionRangeOptions_Declaration> {
    constructor();
    create(value?: PartialMessage<ExtensionRangeOptions_Declaration>): ExtensionRangeOptions_Declaration;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtensionRangeOptions_Declaration): ExtensionRangeOptions_Declaration;
    internalBinaryWrite(message: ExtensionRangeOptions_Declaration, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.ExtensionRangeOptions.Declaration
 */
export declare const ExtensionRangeOptions_Declaration: ExtensionRangeOptions_Declaration$Type;
declare class FieldDescriptorProto$Type extends MessageType<FieldDescriptorProto> {
    constructor();
    create(value?: PartialMessage<FieldDescriptorProto>): FieldDescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FieldDescriptorProto): FieldDescriptorProto;
    internalBinaryWrite(message: FieldDescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FieldDescriptorProto
 */
export declare const FieldDescriptorProto: FieldDescriptorProto$Type;
declare class OneofDescriptorProto$Type extends MessageType<OneofDescriptorProto> {
    constructor();
    create(value?: PartialMessage<OneofDescriptorProto>): OneofDescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OneofDescriptorProto): OneofDescriptorProto;
    internalBinaryWrite(message: OneofDescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.OneofDescriptorProto
 */
export declare const OneofDescriptorProto: OneofDescriptorProto$Type;
declare class EnumDescriptorProto$Type extends MessageType<EnumDescriptorProto> {
    constructor();
    create(value?: PartialMessage<EnumDescriptorProto>): EnumDescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnumDescriptorProto): EnumDescriptorProto;
    internalBinaryWrite(message: EnumDescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumDescriptorProto
 */
export declare const EnumDescriptorProto: EnumDescriptorProto$Type;
declare class EnumDescriptorProto_EnumReservedRange$Type extends MessageType<EnumDescriptorProto_EnumReservedRange> {
    constructor();
    create(value?: PartialMessage<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRange;
    internalBinaryWrite(message: EnumDescriptorProto_EnumReservedRange, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumDescriptorProto.EnumReservedRange
 */
export declare const EnumDescriptorProto_EnumReservedRange: EnumDescriptorProto_EnumReservedRange$Type;
declare class EnumValueDescriptorProto$Type extends MessageType<EnumValueDescriptorProto> {
    constructor();
    create(value?: PartialMessage<EnumValueDescriptorProto>): EnumValueDescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnumValueDescriptorProto): EnumValueDescriptorProto;
    internalBinaryWrite(message: EnumValueDescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumValueDescriptorProto
 */
export declare const EnumValueDescriptorProto: EnumValueDescriptorProto$Type;
declare class ServiceDescriptorProto$Type extends MessageType<ServiceDescriptorProto> {
    constructor();
    create(value?: PartialMessage<ServiceDescriptorProto>): ServiceDescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServiceDescriptorProto): ServiceDescriptorProto;
    internalBinaryWrite(message: ServiceDescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.ServiceDescriptorProto
 */
export declare const ServiceDescriptorProto: ServiceDescriptorProto$Type;
declare class MethodDescriptorProto$Type extends MessageType<MethodDescriptorProto> {
    constructor();
    create(value?: PartialMessage<MethodDescriptorProto>): MethodDescriptorProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MethodDescriptorProto): MethodDescriptorProto;
    internalBinaryWrite(message: MethodDescriptorProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.MethodDescriptorProto
 */
export declare const MethodDescriptorProto: MethodDescriptorProto$Type;
declare class FileOptions$Type extends MessageType<FileOptions> {
    constructor();
    create(value?: PartialMessage<FileOptions>): FileOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FileOptions): FileOptions;
    internalBinaryWrite(message: FileOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FileOptions
 */
export declare const FileOptions: FileOptions$Type;
declare class MessageOptions$Type extends MessageType<MessageOptions> {
    constructor();
    create(value?: PartialMessage<MessageOptions>): MessageOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MessageOptions): MessageOptions;
    internalBinaryWrite(message: MessageOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.MessageOptions
 */
export declare const MessageOptions: MessageOptions$Type;
declare class FieldOptions$Type extends MessageType<FieldOptions> {
    constructor();
    create(value?: PartialMessage<FieldOptions>): FieldOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FieldOptions): FieldOptions;
    internalBinaryWrite(message: FieldOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FieldOptions
 */
export declare const FieldOptions: FieldOptions$Type;
declare class FieldOptions_EditionDefault$Type extends MessageType<FieldOptions_EditionDefault> {
    constructor();
    create(value?: PartialMessage<FieldOptions_EditionDefault>): FieldOptions_EditionDefault;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FieldOptions_EditionDefault): FieldOptions_EditionDefault;
    internalBinaryWrite(message: FieldOptions_EditionDefault, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FieldOptions.EditionDefault
 */
export declare const FieldOptions_EditionDefault: FieldOptions_EditionDefault$Type;
declare class FieldOptions_FeatureSupport$Type extends MessageType<FieldOptions_FeatureSupport> {
    constructor();
    create(value?: PartialMessage<FieldOptions_FeatureSupport>): FieldOptions_FeatureSupport;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FieldOptions_FeatureSupport): FieldOptions_FeatureSupport;
    internalBinaryWrite(message: FieldOptions_FeatureSupport, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FieldOptions.FeatureSupport
 */
export declare const FieldOptions_FeatureSupport: FieldOptions_FeatureSupport$Type;
declare class OneofOptions$Type extends MessageType<OneofOptions> {
    constructor();
    create(value?: PartialMessage<OneofOptions>): OneofOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OneofOptions): OneofOptions;
    internalBinaryWrite(message: OneofOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.OneofOptions
 */
export declare const OneofOptions: OneofOptions$Type;
declare class EnumOptions$Type extends MessageType<EnumOptions> {
    constructor();
    create(value?: PartialMessage<EnumOptions>): EnumOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnumOptions): EnumOptions;
    internalBinaryWrite(message: EnumOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumOptions
 */
export declare const EnumOptions: EnumOptions$Type;
declare class EnumValueOptions$Type extends MessageType<EnumValueOptions> {
    constructor();
    create(value?: PartialMessage<EnumValueOptions>): EnumValueOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnumValueOptions): EnumValueOptions;
    internalBinaryWrite(message: EnumValueOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumValueOptions
 */
export declare const EnumValueOptions: EnumValueOptions$Type;
declare class ServiceOptions$Type extends MessageType<ServiceOptions> {
    constructor();
    create(value?: PartialMessage<ServiceOptions>): ServiceOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServiceOptions): ServiceOptions;
    internalBinaryWrite(message: ServiceOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.ServiceOptions
 */
export declare const ServiceOptions: ServiceOptions$Type;
declare class MethodOptions$Type extends MessageType<MethodOptions> {
    constructor();
    create(value?: PartialMessage<MethodOptions>): MethodOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MethodOptions): MethodOptions;
    internalBinaryWrite(message: MethodOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.MethodOptions
 */
export declare const MethodOptions: MethodOptions$Type;
declare class UninterpretedOption$Type extends MessageType<UninterpretedOption> {
    constructor();
    create(value?: PartialMessage<UninterpretedOption>): UninterpretedOption;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UninterpretedOption): UninterpretedOption;
    internalBinaryWrite(message: UninterpretedOption, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.UninterpretedOption
 */
export declare const UninterpretedOption: UninterpretedOption$Type;
declare class UninterpretedOption_NamePart$Type extends MessageType<UninterpretedOption_NamePart> {
    constructor();
    create(value?: PartialMessage<UninterpretedOption_NamePart>): UninterpretedOption_NamePart;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UninterpretedOption_NamePart): UninterpretedOption_NamePart;
    internalBinaryWrite(message: UninterpretedOption_NamePart, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.UninterpretedOption.NamePart
 */
export declare const UninterpretedOption_NamePart: UninterpretedOption_NamePart$Type;
declare class FeatureSet$Type extends MessageType<FeatureSet> {
    constructor();
    create(value?: PartialMessage<FeatureSet>): FeatureSet;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeatureSet): FeatureSet;
    internalBinaryWrite(message: FeatureSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FeatureSet
 */
export declare const FeatureSet: FeatureSet$Type;
declare class FeatureSetDefaults$Type extends MessageType<FeatureSetDefaults> {
    constructor();
    create(value?: PartialMessage<FeatureSetDefaults>): FeatureSetDefaults;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeatureSetDefaults): FeatureSetDefaults;
    internalBinaryWrite(message: FeatureSetDefaults, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FeatureSetDefaults
 */
export declare const FeatureSetDefaults: FeatureSetDefaults$Type;
declare class FeatureSetDefaults_FeatureSetEditionDefault$Type extends MessageType<FeatureSetDefaults_FeatureSetEditionDefault> {
    constructor();
    create(value?: PartialMessage<FeatureSetDefaults_FeatureSetEditionDefault>): FeatureSetDefaults_FeatureSetEditionDefault;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeatureSetDefaults_FeatureSetEditionDefault): FeatureSetDefaults_FeatureSetEditionDefault;
    internalBinaryWrite(message: FeatureSetDefaults_FeatureSetEditionDefault, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
 */
export declare const FeatureSetDefaults_FeatureSetEditionDefault: FeatureSetDefaults_FeatureSetEditionDefault$Type;
declare class SourceCodeInfo$Type extends MessageType<SourceCodeInfo> {
    constructor();
    create(value?: PartialMessage<SourceCodeInfo>): SourceCodeInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SourceCodeInfo): SourceCodeInfo;
    internalBinaryWrite(message: SourceCodeInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.SourceCodeInfo
 */
export declare const SourceCodeInfo: SourceCodeInfo$Type;
declare class SourceCodeInfo_Location$Type extends MessageType<SourceCodeInfo_Location> {
    constructor();
    create(value?: PartialMessage<SourceCodeInfo_Location>): SourceCodeInfo_Location;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SourceCodeInfo_Location): SourceCodeInfo_Location;
    internalBinaryWrite(message: SourceCodeInfo_Location, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.SourceCodeInfo.Location
 */
export declare const SourceCodeInfo_Location: SourceCodeInfo_Location$Type;
declare class GeneratedCodeInfo$Type extends MessageType<GeneratedCodeInfo> {
    constructor();
    create(value?: PartialMessage<GeneratedCodeInfo>): GeneratedCodeInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeneratedCodeInfo): GeneratedCodeInfo;
    internalBinaryWrite(message: GeneratedCodeInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.GeneratedCodeInfo
 */
export declare const GeneratedCodeInfo: GeneratedCodeInfo$Type;
declare class GeneratedCodeInfo_Annotation$Type extends MessageType<GeneratedCodeInfo_Annotation> {
    constructor();
    create(value?: PartialMessage<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_Annotation;
    internalBinaryWrite(message: GeneratedCodeInfo_Annotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.GeneratedCodeInfo.Annotation
 */
export declare const GeneratedCodeInfo_Annotation: GeneratedCodeInfo_Annotation$Type;
export {};

import { UserSchema } from './user_pb.js'
// The ugly import path below is a consequence of the use of
// strip_import_prefix on the proto_library() target. It is best to avoid
// import_prefix and strip_import_prefix if at all possible, but this example
// shows how to make it work if necessary.
import { StatusSchema } from './_virtual_imports/status_proto/status_pb.js'
import { create, fromBinary, toBinary } from '@bufbuild/protobuf'
import assert from 'node:assert'

let msg = create(UserSchema, {
    name: 'hello world',
    status: create(StatusSchema, { createdAt: new Date() }),
})

// Reference the inherited `.toBinary()` to ensure types from transitive types are included.
msg = fromBinary(UserSchema, toBinary(UserSchema, msg))

assert.equal(msg.name, 'hello world')

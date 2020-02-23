import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Rev = NamespaceBuilder & {};
export const rev: Rev = (namespace(prefixes.rev) as any);

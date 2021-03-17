import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Prefix = NamespaceBuilder & {
    "Atto": NamedNode<'http://qudt.org/2.1/vocab/prefix/Atto'>;
    "Centi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Centi'>;
    "Deca": NamedNode<'http://qudt.org/2.1/vocab/prefix/Deca'>;
    "Deci": NamedNode<'http://qudt.org/2.1/vocab/prefix/Deci'>;
    "Deka": NamedNode<'http://qudt.org/2.1/vocab/prefix/Deka'>;
    "Exa": NamedNode<'http://qudt.org/2.1/vocab/prefix/Exa'>;
    "Exbi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Exbi'>;
    "Femto": NamedNode<'http://qudt.org/2.1/vocab/prefix/Femto'>;
    "Gibi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Gibi'>;
    "Giga": NamedNode<'http://qudt.org/2.1/vocab/prefix/Giga'>;
    "Hecto": NamedNode<'http://qudt.org/2.1/vocab/prefix/Hecto'>;
    "Kibi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Kibi'>;
    "Kilo": NamedNode<'http://qudt.org/2.1/vocab/prefix/Kilo'>;
    "Mebi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Mebi'>;
    "Mega": NamedNode<'http://qudt.org/2.1/vocab/prefix/Mega'>;
    "Micro": NamedNode<'http://qudt.org/2.1/vocab/prefix/Micro'>;
    "Milli": NamedNode<'http://qudt.org/2.1/vocab/prefix/Milli'>;
    "Nano": NamedNode<'http://qudt.org/2.1/vocab/prefix/Nano'>;
    "Pebi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Pebi'>;
    "Peta": NamedNode<'http://qudt.org/2.1/vocab/prefix/Peta'>;
    "Pico": NamedNode<'http://qudt.org/2.1/vocab/prefix/Pico'>;
    "Tebi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Tebi'>;
    "Tera": NamedNode<'http://qudt.org/2.1/vocab/prefix/Tera'>;
    "Yobi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Yobi'>;
    "Yocto": NamedNode<'http://qudt.org/2.1/vocab/prefix/Yocto'>;
    "Yotta": NamedNode<'http://qudt.org/2.1/vocab/prefix/Yotta'>;
    "Zebi": NamedNode<'http://qudt.org/2.1/vocab/prefix/Zebi'>;
    "Zepto": NamedNode<'http://qudt.org/2.1/vocab/prefix/Zepto'>;
    "Zetta": NamedNode<'http://qudt.org/2.1/vocab/prefix/Zetta'>;
};
export const prefix: Prefix = (namespace("http://qudt.org/2.1/vocab/prefix/") as any);

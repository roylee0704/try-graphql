import { InputType, Field, ID } from 'type-graphql';

@InputType({
    description: 'Specifies the input fields required to create a product.',
})
export class ProductInput {

    @Field(type => ID, {
        description: 'Specifies the product to update or create a new product if absent.',
        nullable: true,
    })
    id?: string;

    @Field({
        description: 'The title of the product.',
    })
    title: string;

    @Field({
        description: 'A description of the product.',
    })
    description: string;

    @Field({
        description: 'The name of the product\'s vendor.',
    })
    vendor: string;

    @Field({
        description: 'The product type specified by the merchant.',
    })
    productType: string;

    // todo(roy): move all fields below to its responsible inputType: productVariant, inventoryItem
    // note(roy): price, sku, barcode should belongs to ProductVariants individually.
    @Field()
    price: number;

    @Field({
        description: 'sku (product-variant generation purposes)',
        nullable: true,
    })
    sku?: string;

    @Field({
        description: 'barcode (product-variant generation purposes)',
        nullable: true,
    })
    barcode?: string;

    @Field(type => [ProductOptionInput], {
        description: 'List of custom product options (maximum of 3 per product).',
    })
    options: ProductOptionInput[];
}

@InputType({
    description: 'Options like "Finish", "Color", and "Model". Variants are based on combinations of these options. A product may have a maximum of 3 options.',
})
class ProductOptionInput {
    @Field({
        description: 'The product option’s name.',
    })
    name: string;

    @Field(type => [String], {
        description: 'The corresponding value to the product option name.',
    })
    values: [string];
}
